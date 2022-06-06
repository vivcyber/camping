<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'as_tourist_spots_add';
$title = '新增景點資料 - 舒營';

?>
<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>
<style>
    .form-control.red {
        border: 1px solid red;
    }

    .form-text.red {
        color: red;
    }
</style>

<div class="container p-5 pt-0">
    <div class="w-100 d-flex justify-content-end">
        <a class="nav-link text-dark p-3" href="as_tourist_spots_list.php">
            <i class="fa-solid fa-arrow-rotate-left"></i>
            返回上層
        </a>
        <a class="nav-link text-dark p-3" href="as_tourist_spots_page.php" target="_blank">
            <i class="fa-solid fa-eye"></i>
            View Site
        </a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">新增資料</h5>
                        <form name="form1" onsubmit="sendData();return false;" novalidate>
                            <div class="mb-3">
                                <label for="name" class="form-label">名稱</label>
                                <textarea class="form-control" name="name" id="name" cols="30" rows="1"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="pic" class="form-label">配圖</label>
                                <div action="as_upload_picture_api.php" method="post" enctype="multipart/form-data" style="width: 250px;">
                                    <input type="file" id="pic" name="picture" class="form-control" accept="image/*" />
                                </div>
                                <br>
                                <img id="myimg" src="" alt="" style="width: 250px;" class="pt-2" />

                            </div>
                            <div class="mb-3">
                                <label for="area" class="form-label">區域</label>
                                <select class="form-control" name="area" id="area">
                                    <option value="" selected disabled>-- 請選擇所在鄉鎮 --</option>
                                    <option value="頭城鎮">頭城鎮</option>
                                    <option value="礁溪鄉">礁溪鄉</option>
                                    <option value="員山鄉">員山鄉</option>
                                    <option value="宜蘭市">宜蘭市</option>
                                    <option value="三星鄉">三星鄉</option>
                                    <option value="大同鄉">大同鄉</option>
                                    <option value="南澳鄉">南澳鄉</option>
                                    <option value="羅東鎮">羅東鎮</option>
                                    <option value="冬山鄉">冬山鄉</option>
                                    <option value="蘇澳鎮">蘇澳鎮</option>
                                    <option value="五結鄉">五結鄉</option>
                                    <option value="壯圍鄉">壯圍鄉</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="type" class="form-label">類型</label>
                                <textarea class="form-control" name="type" id="type" cols="30" rows="1"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="open_time" class="form-label">開放時間</label>
                                <textarea class="form-control" name="open_time" id="open_time" cols="30" rows="1"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="close_day" class="form-label">休館日</label>
                                <textarea class="form-control" name="close_day" id="close_day" cols="30" rows="1"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="tel" class="form-label">電話</label>
                                <input type="text" class="form-control" id="tel" name="tel">
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">地址</label>
                                <textarea class="form-control" name="address" id="address" cols="30" rows="2"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">描述</label>
                                <textarea class="form-control" name="description" id="description" cols="30" rows="3"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <div class="mb-3">
                                <label for="event_site" class="form-label">活動網址</label>
                                <textarea class="form-control" name="event_site" id="event_site" cols="30" rows="2"></textarea>
                                <div class="form-text red"></div>
                            </div>
                            <button type="submit" class="btn btn-primary">新增</button>
                        </form>
                        <br>
                        <div id="info-bar" class="alert alert-success" role="alert" style="display:none;">
                            資料新增成功
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/part/scripts.php' ?>


<script>
    const tel_re = /\d{2,4}-?\d{3,4}-?\d{3,4}#?(\d+)?/;
    const pic = document.querySelector('#pic');
    const myimg = document.querySelector('#myimg');
    const picture = document.form1.picture;

    picture.addEventListener('change', async function() {
        const file = this.files[0];
        console.log(file);
        const reader = new FileReader();

        reader.onload = function() {
            console.log(reader.result);
            myimg.src = reader.result;
            myimg.style = "display:inline; width: 250px;"
        }
        reader.readAsDataURL(file);
    });

    function uploadPicture() {
        picture.click();
    }

    const info_bar = document.querySelector('#info-bar');
    const name_f = document.form1.name;
    const area_f = document.form1.area;
    const type_f = document.form1.type;
    const open_time_f = document.form1.open_time;
    const close_day_f = document.form1.close_day;
    const tel_f = document.form1.tel;
    const address_f = document.form1.address;
    const description_f = document.form1.description;
    const pic_f = document.form1.pic;
    const event_site_f = document.form1.event_site;


    const fields = [name_f, pic_f, area_f, type_f, open_time_f, close_day_f, tel_f, address_f, description_f, event_site_f];
    const fieldTexts = [];
    // for (let f of fields) {
    //     fieldTexts.push(f.nextElementSibling);
    // }

    for (let i = 0; i < fields.length; i++) {
        console.log(i, fields[i])
        fieldTexts.push(fields[i].nextElementSibling);
    }


    async function sendData() {


        info_bar.style.display = 'none'; // 隱藏訊息列


        // TODO: 欄位檢查, 前端的檢查
        let isPass = true; // 預設是通過檢查的

        if (name_f.value.length < 3) {
            fields[0].classList.add('red');
            fieldTexts[0].innerText = '至少輸入三個字';
            isPass = false;
        }

        if (tel_f.value && !tel_re.test(tel_f.value)) {
            // alert('手機號碼格式錯誤');
            fields[6].classList.add('red');
            fieldTexts[6].innerText = '號碼格式錯誤';
            isPass = false;
        }

        if (address_f.value.length < 3) {
            fields[7].classList.add('red');
            fieldTexts[7].innerText = '至少輸入三個字';
            isPass = false;
        }
        if (description_f.value.length < 10) {
            fields[8].classList.add('red');
            fieldTexts[8].innerText = '至少輸入十個字';
            isPass = false;
        }

        if (!isPass) {
            return; // 結束函式
        }

        const fd = new FormData(document.form1);
        // 打包
        const r = await fetch('as_tourist_spots_add_api.php', {
            // 丟出去
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; // 顯示訊息列
        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = '新增成功';

            setTimeout(() => {
                // location.href = 'ab-list.php'; // 跳轉到列表頁
            }, 2000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料沒有新增';
        }

    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>>