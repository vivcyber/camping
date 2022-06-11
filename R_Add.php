<?php include __DIR__ . '/part/connect_db.php';
$pageName = 'Room_edit';
$title = '房間類型編輯';


$row = $pdo->query("SELECT * FROM room_list,room_order")->fetch();
// 關於 Room_Type 本身就是title 
$row2 = $pdo->query("SELECT * FROM room_list")->fetchAll(PDO::FETCH_ASSOC);
$row3 = $pdo->query("SELECT * FROM room_photo")->fetchAll(PDO::FETCH_ASSOC);
// var_dump($row3['Room_Image']);
$R_Spec = $row['Room_Spec'];
$r_spec = explode(",", $R_Spec);



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

    .photo-guide {
        border-left: 1px dotted #E5E3E6;
        width: 45%;
    }

    .gallery-size {

        margin: 1rem;
        display: flex;
        flex-wrap: wrap;
    }

    .img-box {
        margin: 0.5rem 0.5rem;
        display: flex;
    }

    .images-size {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

    .circleflow {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }
    figure {
        width: 30%;
        height: 40%;
        object-fit:fill;
        overflow: hidden;
    }
    img {
        width: 100%;
}
    figcaption {
        text-align: center;
        font-size: 2.4vmin;
        margin-top: 0.5vmin;
    }
</style>
<div class="container">
    <div class="row">
        <div class="">
            <div class="card">
                <div class=" card-body">
                    <h5 class="card-title pb-5 pt-5">新增房型</h5>
                    <form class="d-flex justify-content-between" name="form1" enctype="multipart/form-data" onsubmit="sendData(); return false;" novalidate>
                        <!-- 如果看到data- 的開頭等於是用戶自己設定。基本上是不想把這個刪掉，所以前面加data- 是ok的 -->
                        <!-- return false 的意思是解除預設行為 -->
                        
                            <div style="margin-right:10px">
                            <label for="Room_Type" class="form-label">新增房型名稱</label>
                                <div class="mb-3">
                                    <input type="text"class="from-control" id="Room_Type" name="Room_Type" >
                                    <div class="form-text text-danger"></div>
                                </div>
                                <label for="Room_Spec" class="form-label mb-1" id="inroom_spec">Room_Spec</label>
                                <div class="mb-3" id="room_spec">
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="cleaningStaff">清潔用品
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Fridge">冰箱
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Hotpot">電熱水壺
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Sheep">床單
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Wardrobe">衣櫃
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Toiletpaper">衛生紙
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Toilet">廁所
                                    <input type="checkbox" id="Room_Spec" name="Room_spec[]" value="Hairdryer" >吹風機
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
                                <label for="Price" class="form-label" class="mb-1">新增 Price*</label>
                                <div class="mb-3" id="pricess">
                                    <input type="text" class="form-control" id="Price" name="Price">
                                    <!-- html5 的功能 -->
                                    <!-- <div class="form-text"></div> -->
                                </div>
                                <label for="Upload" class="form-label" class="mb-1"></label>
                                <div class="" style="border-bottom:1px dotted #E5E3E6; padding-bottom:1rem;">
                                    <input type="file" id="files" name="files[]" accept=".jpg,.jpeg,.png,.gif,.tif" class="btn btn-primary" onchange="runPreview(); return false;" multiple>
                                    <!-- <div class="d-flex mt-3">
                                        <button class="btn btn-primary mr-2" onclick="addEditImg(this); return false;" style="margin-right: 0.5rem;">Upload Images</button>
                                        <button class="btn btn-primary" id="btncancel">Cancel</button>
                                    </div> -->
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">修改資料</button>
                                <button class="btn btn-primary mt-3" id="backhome">返回</button>
                                </div>
                            </div>
                        <div class="photo-guide">

                            <div class="gallery-img gallery-size" id="imageblock">
                               
                                        <div class="img-box ml-1 mr-1 position-relative" id="preview">
                                           
                                        </div>
                            </div>

                        </div>
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
<script type="text/javascript">
    const row = <?= json_encode($row, JSON_UNESCAPED_UNICODE); ?>; // unicode 是中文

    const files = document.getElementById('files');
    const preview = document.getElementById('preview');

    function runPreview(){
        preview.innerHTML = " ";

        for(i of files.files){
            let reader = new FileReader();
            let figure = document.createElement('figure');
            let figCap = document.createElement('figcaption');

            figCap.innerText = i.name;
            figure.appendChild(figCap);
            reader.onload = () =>{
                let img = document.createElement('img');
                img.setAttribute("src",reader.result);
                figure.insertBefore(img,figCap);
            }
            preview.appendChild(figure);
            reader.readAsDataURL(i);
        }
    }
    function deleteImage(id) {
        const fileclick = document.getElementById('files');

        const RoomTypeNow = document.getElementById('Room_Type');
        const roomnow = RoomTypeNow.options[RoomTypeNow.selectedIndex].value;

        console.log(id);
       $.ajax({
        type: 'post',
        url: 'R_runDelete_api.php',
        data: {Roomttype : id},
        }).done(function(data1) {
            alert(data1);
            FetchImages(roomnow);
            fileclick.value = '';

       });
      
    }

    $('#btncancel').click(function(){
        const fileclick = document.getElementById('files');
        fileclick.value = '';
        return false;
    });

    function addEditImg(id) {
        const fileclick = document.getElementById('files');

        const RoomTypeNow = document.getElementById('Room_Type');
        const roomnow = RoomTypeNow.options[RoomTypeNow.selectedIndex].value;

        var form_data = new FormData();

        //read selected files
        var totalfiles = fileclick.files.length;
        for (let index = 0; index < totalfiles; index++) {
            form_data.append("files[]", document.getElementById("files").files[index]);
        }
        form_data.append("Roomttype",roomnow);

        $.ajax({
            processData: false,
            contentType: false,
            cache: false,
            type: 'post',
            url: 'R_AddEditimg_api.php',
            data: form_data,
            complete :function(data) {
            //    location.reload(true);
                alert(data);
                FetchImages(roomnow);
                fileclick.value = '';
        }
    });
    }

    $('#backhome').click((e)=>{
        e.preventDefault();
        window.location.href='R_room_back.php';
    });


    async function sendData() {

        const info_bar = document.querySelector("#info-bar");
        const fd = new FormData(document.form1);
        const r = await fetch('R_Add_api.php', {
            method: 'POST',
            body: fd,
        });
        console.log(r);
        const result = await r.json();
        console.log(result);
        info_bar.style.display = 'block'; //顯示alert
        $come_from = 'R_room_back.php';
        // if (!empty($_SERVER['HTTP_REFERER'])) {
        //     $come_from = $_SERVER['HTTP_REFERER'];
        // // }

        if (result.success) {
            info_bar.classList.remove('alert-danger');
            info_bar.classList.add('alert-success');
            info_bar.innerText = "新增成功";
            setTimeout(() => {

                
                // header("Location: $come_from");
                window.location.href = $come_from;
                
            }, 3000);
        } else {
            info_bar.classList.remove('alert-success');
            info_bar.classList.add('alert-danger');
            info_bar.innerText = result.error || '資料無法新增';
        }
    }
</script>
<?php include __DIR__ . '/part/html-foot.php' ?>