<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'CP_edit_detail';
$title = '修改商品細節';

$d_sid = isset($_GET['d_sid']) ? intval($_GET['d_sid']) : 0;

$sid = isset($_GET['sid']) ? intval($_GET['sid']) : 0;

$sql2 = sprintf("SELECT cp.*,d.*
FROM `details` d 
JOIN `customize_product` cp
ON CP.sid = $sid
WHERE d.d_sid = $d_sid; ");

$row = $pdo->query($sql2)->fetch();

?>

<?php include __DIR__ . '/part/html-head.php' ?>
<?php include __DIR__ . '/part/navbar.php' ?>

<div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">

                    <h5 class=" text-lg-center">修改 <?= $row['name'] ?> 細項</h5>

                    <form name="form1" onsubmit="sendData();return false;">


                        <div class="color mb-3">
                            <h5 class=" my-3 ">顏色</h5>
                            <div class="color_box d-flex">
                                <div class="color1" style="width: 33%;">
                                    <label for="productcolor" class="form-label">商品顏色1</label>
                                    <input type="text" class="form-control" id="color" name="color" placeholder="顏色名稱" value="<?= $row['color'] ?>" required>
                                    <div class="form-text red"></div>
                                </div>
                                <div class="color1" style="width: 33%;">
                                    <label for="productcolor" class="form-label">顏色代碼1</label>
                                    <input type="text" class="form-control" id="color_code" name="color_code" placeholder="#000000" value="<?= $row['color_code'] ?>" required>
                                    <div class="form-text red"></div>
                                </div>
                                <div class="mb-3" style="width: 33%;">
                                    <label for="c_code" class="form-label">商品代碼1</label>
                                    <input type="text" class="form-control" id="c_code" name="c_code" maxlength="6" placeholder="六個數字" value="<?= $row['c_code'] ?>" required>
                                    <div class="form-text red"></div>
                                </div>
                            </div>
                            <div class="pic_box d-flex">
                                <div class="mb-3" style="width: 33%;">
                                    <label for="pic_name1" class="form-label">商品圖片1</label>
                                    <input type="text" class="form-control" id="pic_name1" name="pic_name1" value="<?= $row['pic_name1'] ?>">
                                    <div class="form-text red"></div>
                                </div>
                                <div class="mb-3" style="width: 33%;">
                                    <label for="pic_name2" class="form-label">商品圖片2</label>
                                    <input type="text" class="form-control" id="pic_name2" name="pic_name2" value="<?= $row['pic_name2'] ?>">
                                    <div class="form-text red"></div>
                                </div>
                                <div class="mb-3" style="width: 33%;">
                                    <label for="pic_name3" class="form-label">商品圖片3</label>
                                    <input type="text" class="form-control" id="pic_name3" name="pic_name3" value="<?= $row['pic_name3'] ?>">
                                    <div class="form-text red"></div>
                                </div>
                            </div>
                            <div class="stock mb-3">
                                <label for="stock" class="form-label">庫存</label>
                                <input type="text" class="form-control" id="stock" name="stock" value="<?= $row['stock'] ?>">
                                <div class="form-text red"></div>
                            </div>

                            <div class="form-text red"></div>
                        </div>


                        <div class="font mb-3">
                            <h5 class=" my-3">字體</h5>
                            <div class="font_box d-flex">
                                <div class="font1" style="width: 50%;">
                                    <label for="font_style1" class="form-label">字型</label>
                                    <select name="font_style1" id="font_style1" class="form-control font_style1">
                                        <option value="">--字型--</option>
                                        <option value="Lora" class="Lora1">Lora</option>
                                        <option value="Roboto Condensed" class="Roboto1">Roboto Condensed</option>
                                        <option value="Spline Sans Mono" class="Spline1">Spline Sans Mono</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                                <div class="font1" style="width: 50%;">
                                    <label for="font_type1" class="form-label">類型</label>
                                    <select name="font_type1" id="font_type1" class="form-control" readonly>
                                        <option value=""></option>
                                        <option value="serif" class="serif1">serif</option>
                                        <option value="sans-serif" class="sans-serif1">sans-serif</option>
                                        <option value="monospace" class="monospace1">monospace</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                            </div>

                            <div class="font_box d-flex">
                                <div class="font1" style="width: 50%;">
                                    <label for="font_style2" class="form-label">字型</label>
                                    <select name="font_style2" id="font_style2" class="form-control font_style2">
                                        <option value="">--字型--</option>
                                        <option value="Lora" class="Lora2">Lora</option>
                                        <option value="Roboto Condensed" class="Roboto2">Roboto Condensed</option>
                                        <option value="Spline Sans Mono" class="Spline2">Spline Sans Mono</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                                <div class="font1" style="width: 50%;">
                                    <label for="font_type2" class="form-label">類型</label>
                                    <select name="font_type2" id="font_type2" class="form-control" readonly>
                                        <option value=""></option>
                                        <option value="serif" class="serif2">serif</option>
                                        <option value="sans-serif" class="sans-serif2">sans-serif</option>
                                        <option value="monospace" class="monospace2">monospace</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                            </div>

                            <div class="font_box d-flex">
                                <div class="font1" style="width: 50%;">
                                    <label for="font_style3" class="form-label">字型</label>
                                    <select name="font_style3" id="font_style3" class="form-control font_style3">
                                        <option value="">--字型--</option>
                                        <option value="Lora" class="Lora3">Lora</option>
                                        <option value="Roboto Condensed" class="Roboto3">Roboto Condensed</option>
                                        <option value="Spline Sans Mono" class="Spline3">Spline Sans Mono</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                                <div class="font1" style="width: 50%;">
                                    <label for="font_type3" class="form-label">類型</label>
                                    <select name="font_type3" id="font_type3" class="form-control" readonly>
                                        <option value=""></option>
                                        <option value="serif" class="serif3">serif</option>
                                        <option value="sans-serif" class="sans-serif3">sans-serif</option>
                                        <option value="monospace" class="monospace3">monospace</option>
                                    </select>
                                    <div class="form-text"></div>
                                </div>
                            </div>
                            <div>
                                <label for="font_price" class="form-label fw-bold ">字型價格</label>
                                <input type="text" class="form-control" id="font_price" name="font_price" value="<?= $row['font_price'] ?>" readonly>
                            </div>

                        </div>
                        <div class="ink mb-3">
                            <h5 class=" my-3">圖案</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="tent" id="ink1" name="ink1">
                                <label class="form-check-label" for="ink1">
                                    tent
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="caravan" id="ink2" name="ink2">
                                <label class="form-check-label" for="ink2">
                                    caravan
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="mountain-sun" id="ink3" name="ink3">
                                <label class="form-check-label" for="ink3">
                                    mountain-sun
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="campground" id="ink4" name="ink4">
                                <label class="form-check-label" for="ink4">
                                    campground
                                </label>
                            </div>
                            <label for="ink_price" class="form-label fw-bold">圖案價格</label>
                            <input type="text" class="form-control" id="ink_price" name="ink_price" value="<?= $row['ink_price'] ?>" readonly>

                        </div>




                        <div class="text-center">
                            <button type="submit" class="btn btn-primary text-white">修改</button>
                            <button type="submit" class="btn border-1 border-primary">
                                <a href="CP_product_detail.php" class=" text-decoration-none">返回</a>
                            </button>
                        </div>

                    </form>
                    <div id="info-bar" class="alert alert-success p-2" role="alert" style="display:none;">
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<?php include __DIR__ . '/part/scripts.php' ?>
<script>
    const font1 = document.querySelector('.font_style1');
    const font2 = document.querySelector('.font_style2');
    const font3 = document.querySelector('.font_style3');
    // const arrayFont = [font1, font2, font3];

    const font_price = document.querySelector('#font_price');
    font_price.value = 0;


    const f1 = <?= json_encode($row['font_style1'], JSON_UNESCAPED_UNICODE); ?>;
    const f2 = <?= json_encode($row['font_style2'], JSON_UNESCAPED_UNICODE); ?>;
    const f3 = <?= json_encode($row['font_style3'], JSON_UNESCAPED_UNICODE); ?>;
    const arrayF = [f1, f2, f3];


    const serif1 = document.querySelector('.serif1');
    const sans_serif1 = document.querySelector('.sans-serif1');
    const monospace1 = document.querySelector('.monospace1');
    const FontType1 = [serif1, sans_serif1, monospace1];
    const serif2 = document.querySelector('.serif2');
    const sans_serif2 = document.querySelector('.sans-serif2');
    const monospace2 = document.querySelector('.monospace2');
    const FontType2 = [serif2, sans_serif2, monospace2];
    const serif3 = document.querySelector('.serif3');
    const sans_serif3 = document.querySelector('.sans-serif3');
    const monospace3 = document.querySelector('.monospace3');
    const FontType3 = [serif3, sans_serif3, monospace3];

    const Lora1 = document.querySelector('.Lora1');
    const Roboto1 = document.querySelector('.Roboto1');
    const Spline1 = document.querySelector('.Spline1');
    const fs1 = [Lora1, Roboto1, Spline1];
    const Lora2 = document.querySelector('.Lora2');
    const Roboto2 = document.querySelector('.Roboto2');
    const Spline2 = document.querySelector('.Spline2');
    const fs2 = [Lora2, Roboto2, Spline2];
    const Lora3 = document.querySelector('.Lora3');
    const Roboto3 = document.querySelector('.Roboto3');
    const Spline3 = document.querySelector('.Spline3');
    const fs3 = [Lora3, Roboto3, Spline3];



    fs1.forEach((fs1) => {
        if (fs1.value == f1) {
            fs1.selected = true;
            font_price.value = 500;
            if (f1 == "Lora") {
                serif1.selected = true;
            }
            if (f1 == "Roboto Condensed") {
                sans_serif1.selected = true;
            }
            if (f1 == "Spline Sans Mono") {
                monospace1.selected = true;
            }
        }
    });
    fs2.forEach((fs2) => {
        if (fs2.value == f2) {
            fs2.selected = true;
            font_price.value = 500;
            if (f2 == "Lora") {
                serif2.selected = true;
            }
            if (f2 == "Roboto Condensed") {
                sans_serif2.selected = true;
            }
            if (f2 == "Spline Sans Mono") {
                monospace2.selected = true;
            }
        }
    });
    fs3.forEach((fs3) => {
        if (fs3.value == f3) {
            fs3.selected = true;
            font_price.value = 500;
            if (f3 == "Lora") {
                serif3.selected = true;
            }
            if (f3 == "Roboto Condensed") {
                sans_serif3.selected = true;
            }
            if (f3 == "Spline Sans Mono") {
                monospace3.selected = true;
            }
        }
    });


    //嘗試用回圈失敗了ＱＱ
    // const FT = ["Lora", "Roboto Condensed", "Spline Sans Mono"];
    // arrayFont.forEach((f) => {
    //     f.addEventListener('change', (event) => {
    //         FT.forEach((ft) => {
    //             FontType1.forEach((ft1) => {
    //                 if (event.target.value == ft) {
    //                     ft1.selected = true;
    //                     // } else {
    //                     //     ft1.selected = false;
    //                     // }
    //                 }
    //             });
    //         });
    //         FT.forEach((ft) => {
    //             FontType2.forEach((ft2) => {
    //                 if (event.target.value == ft) {
    //                     ft2.selected = true;
    //                 } else {
    //                     ft2.selected = false;
    //                 }
    //             });
    //         });
    //         FT.forEach((ft) => {
    //             FontType3.forEach((ft3) => {
    //                 if (event.target.value == ft) {
    //                     ft3.selected = true;
    //                 } else {
    //                     ft3.selected = false;
    //                 }
    //             });
    //         });
    //         font_price.value = 500;
    //     });
    // });

    //自動生成文字類型和價格
    font1.addEventListener('change', (event) => {

        if (event.target.value == "Lora") {
            serif1.selected = true;
            sans_serif1.selected = false;
            monospace1.selected = false;

        } else if (event.target.value == "Roboto Condensed") {
            serif1.selected = false;
            sans_serif1.selected = true;
            monospace1.selected = false;


        } else if (event.target.value == "Spline Sans Mono") {
            serif1.selected = false;
            sans_serif1.selected = false;
            monospace1.selected = true;
        }
        font_price.value = 500;
    });
    font2.addEventListener('change', (event) => {

        if (event.target.value == "Lora") {
            serif2.selected = true;
            sans_serif2.selected = false;
            monospace2.selected = false;

        } else if (event.target.value == "Roboto Condensed") {
            serif2.selected = false;
            sans_serif2.selected = true;
            monospace2.selected = false;

        } else if (event.target.value == "Spline Sans Mono") {
            serif2.selected = false;
            sans_serif2.selected = false;
            monospace2.selected = true;

        }
        font_price.value = 500;
    });
    font3.addEventListener('change', (event) => {

        if (event.target.value == "Lora") {
            serif3.selected = true;
            sans_serif3.selected = false;
            monospace3.selected = false;

        } else if (event.target.value == "Roboto Condensed") {
            serif3.selected = false;
            sans_serif3.selected = true;
            monospace3.selected = false;

        } else if (event.target.value == "Spline Sans Mono") {
            serif3.selected = false;
            sans_serif3.selected = false;
            monospace3.selected = true;
        }
        font_price.value = 500;
    });

    //自動生成圖案價格
    const ink1 = document.querySelector('#ink1');
    const ink2 = document.querySelector('#ink2');
    const ink3 = document.querySelector('#ink3');
    const ink4 = document.querySelector('#ink4');
    const ink_price = document.querySelector('#ink_price');
    const arrayInk = [ink1, ink2, ink3, ink4];
    ink_price.value = 0;
    const i1 = <?= json_encode($row['ink1'], JSON_UNESCAPED_UNICODE); ?>;
    const i2 = <?= json_encode($row['ink2'], JSON_UNESCAPED_UNICODE); ?>;
    const i3 = <?= json_encode($row['ink3'], JSON_UNESCAPED_UNICODE); ?>;
    const i4 = <?= json_encode($row['ink4'], JSON_UNESCAPED_UNICODE); ?>;
    const arrayI = [i1, i2, i3, i4];

    arrayInk.forEach((r) => {
        arrayI.forEach((a) => {
            if (a == r.value) {
                r.checked = true;
                ink_price.value = 200;
            }
        })
    });
    arrayInk.forEach((r) => {
        r.addEventListener('change', (event) => {
            ink_price.value = 200;
        });
    })
    // ink1.addEventListener('change', (event) => {
    //     ink_price.value = 200;
    // });
    // ink2.addEventListener('change', (event) => {
    //     ink_price.value = 200;
    // });
    // ink3.addEventListener('change', (event) => {
    //     ink_price.value = 200;
    // });
    // ink4.addEventListener('change', (event) => {
    //     ink_price.value = 200;
    // });
    async function sendData() {
        // TODO: 欄位檢查, 前端的檢查
        const fd = new FormData(document.form1);
        const r = await fetch('CP_edit_detail_api.php?sid=<?= $sid ?>&d_sid=<?= $d_sid ?>', {
            method: 'POST',
            body: fd,
        });
        const result = await r.json();
        console.log(result);

        const info_bar = document.querySelector('#info-bar');

        info_bar.style.display = 'block'; //顯示訊息列
        if (result.success) {
            // 如果成功
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = "資料修改成功";
            setTimeout(() => {
                location.href = 'CP_product_detail.php';
            }, 1000);
            // 設定1秒後跳轉

        } else {
            // 如果失敗 
            info_bar.classList.add('alert-danger');
            info_bar.classList.remove('alert-success');
            info_bar.innerText = result.error ?? '資料修改失敗';

        }
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>