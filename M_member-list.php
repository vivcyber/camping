<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>



<div class="container px-5 ms-5 flex-shrink-1">


    <!--上方navbar -->
    <div class="up-nav pt-5">
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">舒營</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link <?= $pageName == 'index' ? 'active' : '' ?>" href="index_.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $pageName == 'ab-list' ? 'active' : '' ?>" href="db-list.php">db-list</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $pageName == 'ab-add' ? 'active' : '' ?>" href="db-add.php">會員註冊</a>
                        </li>
                    </ul>

                </div>
            </div> -->
        <div class="view-site">
            <!-- 前往前台的按鈕 -->
            <a class="nav-link text-dark text-lg-end pt-3" href="c_product.php" target="_blank">
                <i class="fa-solid fa-eye"></i>
                View Site
            </a>
            <a href="M_log-out-admin.php">管理者登出</a>
        </div>
        </nav>
    </div>

    <table class="table table-bordered table-striped mt-3  ">
        <thead>
            <tr>
                <th>刪除</th>
                <th scope="col">#</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">電郵</th>
                <th scope="col">生日</th>
                <th scope="col">地址</th>
                <th scope="col">大頭貼</th>
                <th scope="col">會員積分</th>
                <th scope="col">會員等級</th>
                <th>修改</th>
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
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation example">

                <ul class="pagination ">
                    <!--
                            <li class="page-item active">
                                <a class="page-link" href="?page=1">1</a>
                            </li>
                        -->

                </ul>


            </nav>


        </div>
    </div>
</div>

<?php include __DIR__ . '/part/scripts.php' ?>

<script>
    let data;
    const renderPageBtn = (pageNum) => {
        return `
                    <li class="page-item ">
                        <a class="page-link" href="javascript:;" onclick="getNewpage(${pageNum})">${pageNum}</a>
                    </li>
                `;
    };
    const renderPagination = (page = 1, totalPages) => {
        let str = "";
        for (let i = page - 5; i <= page + 5; i++) {
            if (i > 0 && i <= totalPages) {
                str += renderPageBtn(i);
            }
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
        m_avatar,
        m_level,
        m_score
    }) => {
        return `<tr>
                    <td>
                        <a href="javascript: delete_it(${m_id})">
                            <i class="fa-solid fa-trash-can"></i></a>
                    </td>
                        <td>${m_id}</td>
                        <td>${m_name}</td>
                        <td>${m_phone}</td>
                        <td>${m_email}</td>
                        <td>${m_birthday}</td>
                        <td>${m_address}</td>
                        <td><div class="avatar"><img src="./M_uploaded/${m_avatar}"</div></td>
                        <td>${m_level}</td>
                        <td>${m_score}</td>
                        <td>
                        <a href="M_db-edit-admin.php?sid=${m_id}">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>

                    </td>
                    </tr>`;
    };

    function renderTable() {
        const tbody = document.querySelector("tbody");
        let html = "";
        if (data.rows && data.rows.length) {
            html = data.rows.map((r) => renderRow(r)).join("");
        }
        tbody.innerHTML = html;
    }

    function getNewpage(page) {
        fetch(`M_db-list-api.php?page=${page}`)
            .then((r) => r.json())
            .then((obj) => {
                data = obj;
                renderTable();
                renderPagination(page, data.totalPages);
            });
    }

    getNewpage(1);

    function changeNavTab() {
        let nav = document.querySelectorAll(".nav-item");
        nav.forEach((item) => {
            item.classList.remove("active");
        });
    }

    function delete_it(sid) {
        if (confirm(`確定要刪除第${sid}號的資料嗎？`)) {
            //$是backtik不是php
            fetch(
                    "M_db-delete.php?" + new URLSearchParams({
                        m_id: sid
                    }), {
                        method: "GET",
                    }
                )
                .then((r) => r.json())
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        alert("刪囉！");
                        location.href = 'M_member-list.php';
                    }
                })
                .catch();
        }
    }
</script>

<?php include __DIR__ . '/part/html-foot.php' ?>