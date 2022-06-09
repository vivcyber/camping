<?php require __DIR__ . '/part/connect_db.php';
$pageName = 'p_add';
$title = '加商品';

?>

<?php include __DIR__.'/part/html-head.php'?>
<?php include __DIR__.'/part/navbar.php' ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
</head>
<style>
    .form-control.red {
        border: 1px solid red;
    }

    .form-text.red {
        color: red;
    }
</style>
 
<body>

        <div class="container">
            <div class="card m-3 p-3 col-6">
                <!-- <form action="upload_api_beta.php" method="post" enctype="multipart/form-data" onsubmit="javascript: return false;"> -->
                <form id="form1" action="p_add_api_b.php" method="post" enctype="multipart/form-data">
                
                
                                    <div class="mb-3">
                                        <lable class="form-label">Productname:</lable><br>
                                        <input class="form-control" type="text" name="productname" required/><br>
                                    </div>



                                    <lable class="form-label">Productcategory:</lable>
                                    <select name="productcategory" id="productcategory" class="form-control"value="<?= $row['productcategory'] ?>">
                                    <option value="">--商品種類--</option>
                                    <option value="餐廚">餐廚</option>
                                    <option value="桌椅">桌椅</option>
                                    <option value="帳篷">帳篷</option>
                                    </select><br>
                                    <lable class="form-label" >Productcolor:</lable>
                                       <div class="color1" value="<?= $row['productcolor'] ?>">
                                           <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="黑色">
                                              <label class="form-check-label" for="flexRadioDefault1">
                                              黑色
                                             </label>
                                        </div>
                                        <div class="color1">
                                            <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="沙色">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                             沙色
                                             </label>
                                         </div>
                                         <div class="color1">
                                             <input class="form-check-input" type="radio" id="productcolor" name="productcolor" value="綠色">
                                             <label class="form-check-label" for="flexRadioDefault1">
                                             綠色
                                             </label>
                                         </div>
                                    <lable class="form-label" >Productinfo:</lable><br>
                                    
                                    <textarea class="form-control"  name="productinfo" id="productinfo" cols="50" rows="5">
                                    </textarea><br>
                                    <!-- <input class="form-control" type="text" name="productinfo"/><br> -->
                                    <lable >Image:</lable>  <br>
                                    <input class="form-control" type="file" name="productimg" id="productimg"/><br>
                                            <img src="" id="productimg-tag" style="width:200px;" class="card-img" />
                                            <script type="text/javascript">
                                                function readURL(input) {
                                                    if (input.files && input.files[0]) {
                                                        var reader = new FileReader();
                
                                                        reader.onload = function (e) {
                                                            $('#productimg-tag').attr('src', e.target.result);
                                                        }
                                                        reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $("#productimg").change(function(){
                                                    readURL(this);
                                                });

                                                
                                              
                                            </script><br>
                
                
                
                                    <lable class="form-label">Productprice</lable>
                                    <input class="form-control" type="text" name="productprice" /><br>
                                    <lable class="form-label">Productleft</lable>
                                    <input class="form-control" type="text" name="productleft" /><br>
                                    <lable class="form-label">Productspec</lable>
                                    <textarea class="form-control"name="productspec" id="productspec" cols="50" rows="5"></textarea><br>
                                
                                    <lable class="form-label">Productinclude</lable>
                                    <textarea class="form-control"name="productinclude" id="productinclude" cols="50" rows="5"></textarea><br>
                        
                                    <lable class="form-label">Productimg2</lable>
                                    <!-- <input class="form-control" type="text" name="productimg2"/><br> -->
                                    <input class="form-control" type="file" name="productimg2" id="productimg2" /><br>
                                            <img src="" id="productimg2-tag" width="100px" />
                                            <!-- <script type="text/javascript">
                                                function readURL(input) {
                                                    if (input.files && input.files[0]) {
                                                        var reader = new FileReader();
                
                                                        reader.onload = function (e) {
                                                            $('#productimg2-tag').attr('src', e.target.result);
                                                        }
                                                        reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $("#productimg2").change(function(){
                                                    readURL(this);
                                                }); -->
                                            </script><br>



                                    









                                    <lable class="form-label">Productimg3</lable>
                                    <input class="form-control" type="file" name="productimg3" id="productimg3"/><br>
                                            <!-- <img src="" id="productimg3-tag" width="100px" />
                                            <script type="text/javascript">
                                                function readURL(input) {
                                                    if (input.files && input.files[0]) {
                                                        var reader = new FileReader();
                
                                                        reader.onload = function (e) {
                                                            $('#productimg3-tag').attr('src', e.target.result);
                                                        }
                                                        reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $("#productimg3").change(function(){
                                                    readURL(this);
                                                }); -->
                                            </script><br>


                                   

                                    <input class="btn btn-primary"type="submit" name="register" value="＋新增＋" />
                
                </form>
            </div>
        </div>
 <?php include __DIR__ . '/part/scripts.php' ?>   
<?php include __DIR__.'/part/html-foot.php' ?>