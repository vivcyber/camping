<?php
session_start();
require __DIR__ . '/part/connect_db.php';

$pKeys = array_keys($_SESSION['cart']);
$rows = []; // 預設值
$data_ar = []; // dict

if (!empty($pKeys)) {
    $sql = sprintf("SELECT * FROM camproduct2 WHERE sid IN(%s)", implode(',', $pKeys));
    $rows = $pdo->query($sql)->fetchAll();

    foreach ($rows as $r) {
        $r['quantity'] = $_SESSION['cart'][$r['sid']];
        $data_ar[$r['sid']] = $r;
    }
}
?>
<?php include 'c_part/c_head.php'; ?>
<?php include 'c_part/c_nav.php'; ?>
<part>

    <div class="container">
        <div class="row mt-5 card p-5">
            <div class="col">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"><i class="fas fa-trash-alt"></i></th>
                            <th scope="col">商品</th>
                            <th scope="col">名稱</th>
                            <th scope="col">價格</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($data_ar as $product) :
                            $item = $product;
                        ?>
                            <tr class="p-item" data-sid="<?= $item['sid'] ?>">
                                <td><a href="#" onclick="removeProductItem(event)"><i class="fas fa-trash-alt"></i></a></td>
                                <td><img src="imgs/product/<?= $item['productimg'] ?>.jpg" alt="" style="width:300px"></td>
                                <td><?= $item['productname'] ?></td>
                                <td class="price" data-price="<?= $item['productprice'] ?>"></td>
                                <td>
                                    <select class="form-control quantity" data-qty="<?= $item['quantity'] ?>" onchange="changeQty(event)">
                                        <?php for ($i = 1; $i <= 20; $i++) : ?>
                                            <option value="<?= $i ?>"><?= $i ?></option>
                                        <?php endfor; ?>
                                    </select>
                                </td>
                                <td class="sub-total"></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>

                <div class="alert alert-primary" role="alert">
                    總計: <span id="totalAmount"></span>
                </div>
                <?php if (isset($_SESSION['loginUser'])) : ?>
                    <a href="sc_save-orders.php" class="btn btn-success">結帳</a>
                <?php else : ?>
                    <div class="alert alert-danger" role="alert">
                        請先登入會員再結帳
                    </div>
                <?php endif; ?>
            </div>

        </div>

    </div>
    <?php include 'c_part/c_scripts.php'; ?>
    <script>
        const dallorCommas = function(n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        };

        function removeProductItem(event) {
            event.preventDefault(); // 避免 <a> 的連結
            const tr = $(event.target).closest('tr.p-item')
            const sid = tr.attr('data-sid');

            $.get('sc-add-to-cart-api.php', {
                sid
            }, function(data) {
                tr.remove();
                countCartObj(data);
                calPrices();
            }, 'json');
        }



        function changeQty(event) {
            let qty = $(event.target).val();
            let tr = $(event.target).closest('tr');
            let sid = tr.attr('data-sid');

            $.get('sc-add-to-cart-api.php', {
                sid,
                qty
            }, function(data) {
                countCartObj(data);
                calPrices();
            }, 'json');
        }

        function calPrices() {
            const p_items = $('.p-item');
            let total = 0;
            if (!p_items.length) {
                alert('請先將商品加入購物車');
                location.href = 'c_product_2.php';
                return;
            }

            p_items.each(function(i, el) {
                console.log($(el).attr('data-sid'));
                // let price = parseInt( $(el).find('.price').attr('data-price') );
                // let price = $(el).find('.price').attr('data-price') * 1;

                const $price = $(el).find('.price'); // 價格的 <td>
                $price.text('$ ' + $price.attr('data-price'));

                const $qty = $(el).find('.quantity'); // <select> combo box
                // 如果有的話才設定
                if ($qty.attr('data-qty')) {
                    $qty.val($qty.attr('data-qty'));
                }
                $qty.removeAttr('data-qty'); // 設定完就移除

                const $sub_total = $(el).find('.sub-total');

                $sub_total.text('$ ' + dallorCommas($price.attr('data-price') * $qty.val()));
                total += $price.attr('data-price') * $qty.val();
            });

            $('#totalAmount').text('$ ' + dallorCommas(total));

        }
        calPrices();
    </script>
    <?php include 'c_part/c_foot.php'; ?>