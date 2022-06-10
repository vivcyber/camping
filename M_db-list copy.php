<?php
require __DIR__ . '/part/connect_db.php';
$pageName = 'db-list';
$title = "通訊錄列表";

$perPage = 10;

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
//如果用戶有用GET method設定頁數，則轉去當前頁數，若輸入數字非整數，則取整數，兩種都否的話，跳轉第一頁

if ($page < 1) {
    header('Location: ? page = 1');
    exit;
}

$t_sql = "SELECT COUNT(*) FROM `memberdata`";
$totalRows = $pdo->query($t_sql)->fetch(PDO::FETCH_NUM)[0];


$totalPages = ceil($totalRows / $perPage);


$rows = [];

if ($totalRows > 0) {
    if ($page > $totalPages) {
        header("Location: ?pages=$totalPages");
        exit;
    }

    $sql = sprintf(
        "SELECT * FROM `memberdata` ORDER BY m_id LIMIT %s,%s",
        ($page - 1) * $perPage,
        $perPage
    );

    $rows = $pdo->query($sql)->fetchAll();
}



?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>


<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <!--
                            <li class="page-item active">
                                <a class="page-link" href="?page=1">1</a>
                            </li>
                        -->
                </ul>
            </nav>
        </div>
    </div>

    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">電郵</th>
                <th scope="col">生日</th>
                <th scope="col">地址</th>
            </tr>
        </thead>
        <tbody>
            <!--
                    <tr>
                        <td>1108</td>
                        <td>shinder</td>
                        <td>0935111222</td>
                        <td>shinder@test.com</td>
                        <td>1990-07-09</td>
                        <td>台中市</td>
                    </tr>
                -->
        </tbody>
    </table>
</div>
<p><a href="/M_log-out.php">登出</a></p>


<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    // function trashCanCilcked(event) {
    //     console.log(event.target);
    //     const a_tag = event.currentTarget;
    //     const tr = a_tag.closest('tr');
    //     tr.remove();
    // }

    function delete_it(sid) {
        if (confirm(`確定要刪除第${sid}號的資料嗎？`)) { //$是backtik不是php
            location.href = `db-delete.php?m_id=${sid}`;
        }
    }
</script>
<script>
    let data;
    const renderPageBtn = (pageNum) => {
        return `
                    <li class="page-item ">
                        <a class="page-link" href="javascript:;" onclick="getNewpage(${pageNum})">${pageNum}</a>
                    </li>
                `;
    };
    const renderPagination = (page = 1, totalPages = 10) => {
        let str = "";
        for (let i = 1; i <= totalPages; i++) {
            str += renderPageBtn(i);
        }
        document.querySelector(".pagination").innerHTML = str;
    };
    const renderRow = ({
        m_id,
        m_name,
        m_phone,
        m_email,
        m_birthday,
        m_address,
    }) => {
        return `<tr>
                        <td>${m_id}</td>
                        <td>${m_name}</td>
                        <td>${m_phone}</td>
                        <td>${m_email}</td>
                        <td>${m_birthday}</td>
                        <td>${m_address}</td>
                    </tr>`;
    };

    function renderTable() {
        const tbody = document.querySelector("tbody");
        let html = "";
        if (data.rows && data.rows.length) {
            console.log(data.rows);
            html = data.rows.map((r) => renderRow(r)).join("");
        }
        tbody.innerHTML = html;
        console.log(data);
        console.log(html);
        console.log(tbody);
    }

    function getNewpage(page) {
        fetch(`M_db-list-api.php?page=${page}`)
            .then((r) => r.json())
            .then((obj) => {
                data = obj;
                renderTable();
                renderPagination();
            });
    }

    getNewpage(1);
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>