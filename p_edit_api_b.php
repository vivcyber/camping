
<?php require __DIR__ . '/part/connect_db.php';
header('Content-Type: application/json');

$output = [
    'success' => false,
    'postData' => $_POST,
    'code' => 0,
    'error' => ''
];
$sid = isset($_POST['sid']) ? intval($_POST['sid']) : 0;

    if(isset($_POST['edit']))
    {
        $productname = $_POST['productname'];
        $productcategory = $_POST['productcategory'];
        $productcolor = $_POST['productcolor'];
        $productinfo = $_POST['productinfo'];

        $productimg = $_FILES['productimg']['name'];
        $productimg_tmp = $_FILES['productimg']['tmp_name'];

        $productprice = $_POST['productprice'];
        $productleft = $_POST['productleft'];
        $productspec = $_POST['productspec'];
        $productinclude = $_POST['productinclude'];
       
        $productimg2 = $_FILES['productimg2']['name'];
        $productimg2_tmp = $_FILES['productimg2']['tmp_name'];

        $productimg3 = $_FILES['productimg3']['name'];
        $productimg3_tmp = $_FILES['productimg3']['tmp_name'];

        move_uploaded_file($productimg_tmp,"./imgs/product/$productimg");
        move_uploaded_file($productimg2_tmp,"./imgs/product/$productimg2");
        move_uploaded_file($productimg3_tmp,"./imgs/product/$productimg3");

        // move_uploaded_file($productimg_tmp,"./uploads/$productimg");

        $con = mysqli_connect("localhost","root","","projecttest");

        $query="UPDATE `camproduct2` SET `productname`=?,`productcategory`=?,`productcolor`=?,`productinfo`=?,`productimg`=?,`productprice`=?,`productleft`=?,`productspec`=?,`productinclude`=?,`productimg2`=?,`productimg3`=? WHERE `sid`=$sid";

        // $query="INSERT INTO `camproduct2`( `productname`, `productcategory`, `productinfo`, `image`, `productprice`, `productleft`) VALUES ('$productname','$productcategory','$productinfo','$image','$productprice','$productprice')";

        // $query = "insert into camproduct (productname, productcategory, productinfo, image, productprice, productleft) values ('$productname','$productcategory','$productinfo','$image','$productprice','$productleft')";

        $result = mysqli_query($con, $query);


       

        if($result==1)
        {  
            header("upload_ beta.php");
            echo "send data";
            header("location:p_list.php"); 

            // echo "添加成功";
        
        }
        else {       

        echo "Insertion Failed";

             }
    }

    // if ($result == 1) {
    //     $output['success'] = true;
    // } else {
    //     $output['error'] = '資料無法新增';
    // }
    
    
    
    // echo json_encode($output, JSON_UNESCAPED_UNICODE);
?>