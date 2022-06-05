<?php include __DIR__ . '/part/connect_db.php';
$pageName = 'Room_edit';
$title = '編輯通訊錄資料 - 拉拉的網站';


//基本上，這裡做修改頁面的邏輯是跳到修改頁面的方式去呈現。
//所以會跟ab-add.php 的格式一樣，所以就拿來做修改。
//這裡我們先取得sid的值。然後再去判斷如果沒有sid的值，那我們就不變。直接不處理。
$sid = isset($_GET['OrderNum']) ? intval($_GET['OrderNum']) : 0;
if (empty($sid)) {
    header('Location: R_room_back.php');
    exit;
}
//因為上面取得到sid的值所以才會接下來到這裡。
//設定row 就是 sql的語法。如果sql抓到空值，我們也不幹了。就直接保持原來就好。

$row = $pdo->query("SELECT * FROM room_order WHERE OrderNum=$sid")->fetch();
$row2 = $pdo->query("SELECT * FROM room_order,room_type WHERE room_order.Room_Type=room_type.Room_Type and sid=$sid")->fetch(PDO::FETCH_ASSOC);
$R_Spec = $row2['Room_Spec'] ?? '';
$r_spec = explode(",", $R_Spec) ?? '';
if (empty($row)) {
    header('Location: R_room_back.php');
    exit;
}


?>
<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<style>
    .form-control .border-danger {
        border: 1px solid #f77885;
    }

    .form-text .red {
        color: var(--bs-red);
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class=" card-body">
                    <h5 class="card-title">編輯資料</h5>
                    <form name="form1" enctype="multipart/form-data" onsubmit="sendData(); return false;" novalidate>
                        <!-- 如果看到data- 的開頭等於是用戶自己設定。基本上是不想把這個刪掉，所以前面加data- 是ok的 -->
                        <!-- return false 的意思是解除預設行為 -->
                        <input type="hidden" name="OrderNum" value="<?= $row['OrderNum'] ?>">

                        <div class="mb-3">
                            <!-- 這裡的sendData 運用的方式是 AJAX的格式 -->
                            <label for="OrderNum" class="form-label">OrderNumber</label>
                            <input type="text" class="form-control" id="OrderNum" name="OrderNum" readonly="readonly" value="<?= $row['OrderNum'] ?>">
                            <div class="form-text text-danger"></div>
                        </div>

                        <div class="mb-3">
                            <label for="Date" class="form-label">* Date</label>
                            <input type="date" class="form-control" id="Date" name="Date" pattern="^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$" value="<?= $row['Date'] ?>">
                            <div class="form-text text-danger"></div>
                        </div>

                        <div class="mb-3">
                            <label for="Room_Type" class="form-label">* Room_Type</label>
                            <select class="form-control" id="Room_Type" name="Room_Type">
                                <option value="這裡要放Room_Type的 room1"></option>
                                <option value="room2"></option>
                                <option value="room3"></option>
                                <option value="room4"></option>
                                <option value="car1"></option>
                                <option value="car2"></option>
                                <option value="car3"></option>

                                <div class="form-text text-danger"></div>
                        </div>

                        <div class="mb-3">
                            <label for="Room_Spec" class="form-label">Room_Spec</label> </br>
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="cleaningStaff" <?php
                                                                                                            if (in_array("cleaningStaff", $r_spec)) {
                                                                                                                echo "checked";
                                                                                                            }
                                                                                                            ?>>清潔用品
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Fridge">冰箱
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Hotpot">電熱水壺
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Sheep">床單
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Wardrobe">衣櫃
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Toiletpaper">衛生紙
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Toilet">廁所
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Hairdryer">吹風機
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Tub">浴缸 </br>
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Washroom">沐浴間
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Towel">毛巾
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Sliper">拖鞋
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Desk">書桌
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Television">平面電視
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Phone">電話
                            <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Channel">有線頻道

                            <!-- <div class="form-text text-danger"></div> -->
                        </div>

                        <div class="mb-3">
                            <label for="Price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="Price" name="Price" value="<?= $row['Price'] ?>">
                            <!-- html5 的功能 -->
                            <div class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="ID_Comments" class="form-label">ID_Comments</label>
                            <textarea class="form-control" name="ID_Comments" id="ID_Comments" cols="30" rows="3" value="<?= $row['ID_Comments'] ?>"></textarea>
                            <div class="form-text"></div>
                        </div>

                        <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                     </div> -->
                        <button type="submit" class="btn btn-primary">修改資料</button>
                    </form>
                    <div id="info-bar" class="alert alert-success" role="alert" style="display: none;">
                        資料新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    const row = <?= json_encode($row, JSON_UNESCAPED_UNICODE); ?> // unicode 是中文


    // const email_re = /\S+@\S+\.\S+/;
    // const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/;

    const name_f = document.form1.OrderNum;
    const email_f = document.form1.email;
    const mobile_f = document.form1.mobile;
    const info_bar = document.querySelector('#info-bar');

    const fields = [name_f, email_f, mobile_f];
    const fieldText = [];
    for (let f of fields) {
        fieldText.push(f.nextElementSibling);
    }

    async function sendData() {
        //TODO:欄位檢查

        //讓外觀回复原狀

        for (let i in fields) {
            fields[i].classList.remove('border-danger');
            fieldText.innerText = '';
        }

        info_bar.style.display = "none"; //隱藏訊息

        let isPass = true;

        if (name_f.value.length < 2) {

            // name_f.classList.add('text-danger'); 
            //這個add只能追加子class，所以必須寫主class (.要加的class)


            // name_f.nextElementSibling.classList.add('red'); //會被找最符合且最接近的class然後做附加。
            //classList 是 element，裡面有add 和 remove，item三種元素
            // element.nextElementSibling的意思是

            // name_f.closest('.mb-3').querySelector('.form-text').classList.add('text-danger');
            //這一個會直接指向最大的class然後再指向最大的class的東西後附加效果。

            fields[0].classList.add('border-danger');
            fieldText[0].classList.add('text-danger');
            fieldText[0].innerText = "名字至少要两个字以上";
            // alert('Bro,連名字都亂寫咩');
            isPass = false;
        } //javascript的判斷 name的部分。

        if (email_f.value && !email_re.test(email_f.value)) {
            fields[1].classList.add('border-danger');
            fieldText[1].classList.add('text-danger');
            fieldText[1].innerText = "Email的格式錯誤";
            // alert("Email錯9lan賽咯,diu");
            isPass = false;
        } //email的格式的判斷。

        if (mobile_f.value && !mobile_re.test(mobile_f.value)) {
            // alert("Walao,手機號碼都寫錯咩");
            fields[2].classList.add('border-danger');
            fieldText[2].classList.add('text-danger');
            fieldText[2].innerText = "手機格式錯誤";
            isPass = false;
        }

        if (!isPass) {
            return; //如果ispass不等於true的話，就直接return，一下都不進行了。
        }


        const fd = new FormData(document.form1);
        const r = await fetch('R_edit_api.php', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; //顯示alert
        $come_from = 'R_room_back.php';
        if (!empty($_SERVER['HTTP_REFERER'])) {
            $come_from = $_SERVER['HTTP_REFERER'];
        }

        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = "修改成功";
            setTimeout(() => {


                header("Location: $come_from");
            }, 2000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料無法修改';
        }
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>