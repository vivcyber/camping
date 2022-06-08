<?php
require __DIR__ . '/M_databse-connect.php';

$pageName =  'db-add';
$title = '會員註冊';

?>

<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>

<!--表單頁面-->
<div class="register-container container" style="margin:50px auto">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="register-card p-5">
                <div class=" register-card-body ">
                    <h5 class="card-title">會員註冊</h5>
                    <form name="form1" onsubmit="sendData(); return false;" novalidate>
                        <!--novalidate:html不對表單進行驗證-->
                        <div class="mb-3">
                            <label for="name" class="form-label">*姓名</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="account" class="form-label">*帳號</label>
                            <input type="text" class="form-control" id="username" name="username" required>
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">*密碼</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                            <div class="form-text"></div>
                        </div>

                        <!-- <div class="mb-3">
                            <label for="avatar" class="form-label">上傳大頭貼</label>
                            <input type="file" class="form-control" id="avatar" name="photos" onchange="changeImg(event)">
                            <img id="myimg" src="" alt="" style="display:none;">
                            <div class="form-text red"></div>
                        </div> -->


                        <div>
                            <input type="file" name="avatar" accept="image/*" style="display: none;" />
                        </div>

                        <button type="button" id="btn" onclick="uploadAvatar()">上傳大頭貼</button>
                        <br />
                        <img class="mt-3 mb-3" id="myimg" src="" alt="" style="display:none;" />



                        <div class="mb-3">
                            <label for="email" class="form-label">*電子郵件</label>
                            <input type="email" class="form-control" id="email" name="email">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="mobile" class="form-label">*行動電話</label>
                            <input type="text" class="form-control" id="mobile" name="mobile" pattern="09\d{8}">
                            <!--09後面八碼-->
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="birthday" class="form-label">*生日</label>
                            <input type="date" class="form-control" id="birthday" name="birthday">
                            <div class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">*地址</label>
                            <textarea class="form-control" name="address" id="address" cols="30" rows="3"></textarea>
                            <div class="form-text"></div>
                        </div>

                        <button type="submit" class="btn btn-primary">新增</button>
                    </form>
                    <div id="info-bar" class="alert alert-success mt-2" role="alert" style="display:none;">
                        <!--新增成功時才出現-->
                        資料新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<script>
    //前端驗證
    const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/;

    const info_bar = document.querySelector('#info-bar');
    const name_f = document.form1.name;
    const email_f = document.form1.email;
    const mobile_f = document.form1.mobile;

    const fields = [name_f, email_f, mobile_f];
    const fieldText = [];
    for (let f of fields) {
        fieldText.push(f.nextElementSibling);
    }

    //
    async function sendData() {
        //讓欄位外觀回復原來狀態
        for (let i in fields) {
            fields[i].classList.remove('red');
            fieldText[i].innerText = '';
        }

        info_bar.style.display = 'none'; //隱藏訊息列

        //欄位檢查，前端的檢查

        let isPass = true; //預設通過檢查

        // 姓名

        if (name_f.value.length < 2) { //名字至少兩個字
            fields[0].classList.add('red');
            fieldText[0].innerText = '請輸入至少兩個字';
            isPass = false;
        }

        //email

        if (email_f.value && !email_re.test(email_f.value)) { //email valuex 不為空且不符合正規表達式
            fields[1].classList.add('red');
            fieldText[1].innerText = 'email格式錯誤';
            isPass = false;

        }

        //mobile

        if (mobile_f.value && !mobile_re.test(mobile_f.value)) {
            fields[2].classList.add('red');
            fieldText[2].innerText = '手機號碼格式錯誤';
            isPass = false;
        }

        //若驗證不通過

        if (!isPass) {
            return; //結束sendData();
        }

        const fd = new FormData(document.form1);
        const r = await fetch('M_db-add-api.php', {
            method: "POST",
            body: fd,
        });
        // console.log(r);

        const result = await r.json(); //json()是fetch的method，回傳json形式的promise
        console.log(result);

        info_bar.style.display = 'block'; //顯示訊息列

        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = '新增成功';


            setTimeout(() => {
                location.href = 'M_log-in.php';
            }, 2000);


        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料錯誤:使用者名稱已存在';
        }








    }

    //上傳大頭貼

    // const file = document.querySelector('#avatar');


    // function changeImg(event) {
    //     const reader = new FileReader();

    //     const files = file.files[0];
    //     // console.log(files);

    //     //資料載入後
    //     reader.onload = function() {

    //         document.querySelector('#myimg').src = reader.result;
    //         document.querySelector('#myimg').style = "width: 200px; height:200px; object-fit:cover; border-radius:50%; margin-top:30px;display:block";
    //     }
    //     reader.readAsDataURL(files);
    // }

    const btn = document.querySelector("#btn");
    const myimg = document.querySelector("#myimg");
    const avatar = document.form1.avatar;


    avatar.addEventListener("change", async function() {
        // 上傳表單
        const file = this.files[0];
        console.log(file);
        const reader = new FileReader();

        // 資料載入後 (讀取完成後)
        reader.onload = function() {
            console.log(reader.result);
            myimg.src = reader.result;
            myimg.style = "display:inline;width:150px;height:150px;object-fit:cover;border-radius:50%;"

        };
        reader.readAsDataURL(file);
    });


    function uploadAvatar() {
        avatar.click(); // 模擬點擊
    }

    $(document).ready(function() {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;
        $("#birthday").attr("value", today);
    });
</script>


<?php include __DIR__ . '/c_part/c_foot.php' ?>