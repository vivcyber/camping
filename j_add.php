<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'j_add';
$title = '加食譜';

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
<div class="container">
    <button class="btn btn-light mb-2" id="fasttext"></button>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新增食譜</h5>
                    <form name="form1" onsubmit="sendData();return false;" novalidate>
                        <div class="mb-3">
                            <label for="resname" class="form-label">食譜名稱</label>
                            <input type="text" class="form-control" id="resname" name="resname" required>
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tool" class="form-label">所需鍋具</label>
                            <input type="text" class="form-control" id="tool" name="tool">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="ingredient" class="form-label">食材</label>
                            <input type="text" class="form-control" id="ingredient" name="ingredient">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="tutorial" class="form-label">教學</label>
                            <input type="text" class="form-control" id="tutorial" name="tutorial">
                            <div class="form-text red"></div>
                        </div>
                        <!-- <div class="mb-3">
                            <label for="productinfo" class="form-label">教學</label>
                            <textarea class="form-control" name="tutorial" id="tutorial" cols="30" rows="3"></textarea>
                            <div class="form-text red"></div>
                        </div> -->
                        <div class="mb-3">
                            <label for="serves" class="form-label">人數</label>
                            <input type="text" class="form-control" id="serves" name="serves">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="cook_time" class="form-label">烹煮時間</label>
                            <input type="text" class="form-control" id="cook_time" name="cook_time">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="recipetype" class="form-label">葷素</label>
                            <input type="text" class="form-control" id="recipetype" name="recipetype">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="resimgtext" class="form-label">圖片描述</label>
                            <input type="text" class="form-control" id="resimgtext" name="resimgtext">
                            <div class="form-text red"></div>
                        </div>
                        <div class="mb-3">
                            <label for="resimg" class="form-label">圖片</label>
                            <div method="post" enctype="multipart/form-data" style="width: 250px;">
                                <input type="file" id="resimg" name="resimg" class="form-control" accept="image/*" />
                            </div>
                            <br>
                            <img id="myimg" src="" alt="" style="width: 250px;" class="pt-2" />
                        </div>
                        <button type="submit" class="btn btn-primary text-white">新增</button>
                    </form>
                    <!-- <form action="p_add_upload_api.php" method="post" enctype="multipart/form-data">
                     Select Image File to Upload:
                    <input type="file" name="file" class="form-control my-3">
                    <input type="submit" name="submit" value="Upload" class="btn btn-outline-secondary my-1">
                    </form> -->

                    <div id="info-bar" class="alert alert-success p-2" role="alert" style="display:none;">
                        資料新增成功
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    const info_bar = document.querySelector('#info-bar');
    
    const name_f = document.form1.resname;
    const tool_f = document.form1.tool;
    const ingredient_f = document.form1.ingredient;
    const tutorial_f = document.form1.tutorial;
    const serves_f = document.form1.serves;
    const cook_time_f = document.form1.cook_time;
    const recipetype_f = document.form1.recipetype;
    const resimgtext_f = document.form1.resimgtext;

    const pic = document.querySelector('#resimg');
    const myimg = document.querySelector('#myimg');
    const picture = document.form1.resimg;

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

    const fields = [name_f, tool_f, ingredient_f, tutorial_f, serves_f, cook_time_f, recipetype_f, resimgtext_f];
    const fieldTexts = [];
    for (let f of fields) {
        fieldTexts.push(f.nextElementSibling);
    }

    $('#fasttext').click((e) => {
        e.preventDefault();
        name_f.value = "三文魚燉飯";
        tool_f.value = "平底鍋";
        ingredient_f.value = "米2杯、三文魚2-3塊、洋蔥半個、蘑菇3-4隻、雞湯一盒、牛奶或鮮奶油150g";
        tutorial_f.value = "1）將洋蔥、蘑菇切成小塊；將蒜切片；用鹽、胡椒將三文魚調味；米洗好並先浸20分鐘。 2）落油熱鍋，煎熟三文魚後暫時取起。 3）將洋蔥、蒜、蘑菇炒香。 4）加入已浸泡的白米炒熱。 5）倒入牛奶或奶油翻炒，蓋上鍋蓋燉煮。煮至濃稠後，可適量加入雞湯或水再繼續燉煮，直至米粒全熟。 6）在飯上放上先前煎好的三文魚。";
        serves_f.value = "1-2";
        cook_time_f.value = "20分";
        recipetype_f.value = "葷";
        resimgtext_f.value = "暖呼呼的";
    })

    async function sendData() {
        // 讓欄位的外觀回復原來的狀態
        for (let i in fields) {
            fields[i].classList.remove('red');
            fieldTexts[i].innerText = '';
        }
        info_bar.style.display = 'none'; // 隱藏訊息列

        // TODO: 欄位檢查, 前端的檢查
        let isPass = true; // 預設是通過檢查的

        if (name_f.value.length < 1) {
            // alert('姓名至少兩個字');
            // name_f.classList.add('red');
            // name_f.nextElementSibling.classList.add('red');
            // name_f.closest('.mb-3').querySelector('.form-text').classList.add('red');
            fields[0].classList.add('red');
            fieldTexts[0].innerText = '今晚,我想要來點...';
            isPass = false;
        }

        if (tool_f.value.length < 1) {
            fields[1].classList.add('red');
            fieldTexts[1].innerText = '要用什麼瘋狂做菜呢?';
            isPass = false;
        }

        if (tutorial_f.value.length < 1) {
            fields[3].classList.add('red');
            fieldTexts[3].innerText = '給點步驟吧!';
            isPass = false;
        }
        if (ingredient_f.value.length < 1) {
            fields[2].classList.add('red');
            fieldTexts[2].innerText = '想要料理什麼呢?';
            isPass = false;
        }
        if (serves_f.value.length < 1) {
            fields[4].classList.add('red');
            fieldTexts[4].innerText = '佳餚是幾人份?';
            isPass = false;
        }
        if (cook_time_f.value.length < 1) {
            fields[5].classList.add('red');
            fieldTexts[5].innerText = '需要等多久呢?';
            isPass = false;
        }
        if (recipetype_f.value.length < 1) {
            fields[6].classList.add('red');
            fieldTexts[6].innerText = '確定沒有出家人嗎';
            isPass = false;
        }
        if (resimgtext_f.value.length < 1) {
            fields[7].classList.add('red');
            fieldTexts[7].innerText = '吃完形容一下口感吧';
            isPass = false;
        }

        if (!isPass) {
            return; // 結束函式
        }
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('j_add_api.php', {
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
                location.href = 'j_list.php'; // 跳轉到列表頁
            }, 2000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料無法新增';
        }

    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>