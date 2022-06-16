<?php require __DIR__ . '/part/connect_db.php';

        
       

    function build_calendar($month,$year){
        global $pdo;

        $query = "SELECT * FROM room_order WHERE MONTH(Date)=? AND YEAR(Date)=?";
        $result = $pdo->prepare($query);
        $result->bindParam('ss',$month,$year,PDO::PARAM_INT);
        $booking = array();
        if($result->execute()){
            if($result -> numb_row >0 ){
                while($row = $result->fetchAll(PDO::FETCH_ASSOC)){
                    $booking[]=$row['date'];
                }
            }
        }
      


        $daysOfWeek = array('星期天','星期一','星期二','星期三','星期四','星期五','星期六');
        $firstDayOfMonth = mktime(0,0,0,$month,1,$year);
        $numberDays = date('t',$firstDayOfMonth);
        $dateComponents = getdate($firstDayOfMonth);
        $monthName=$dateComponents['month'];
        $dayOfWeek = $dateComponents['wday'];
        $dateToday = date('Y-m-d');
       
        $prev_month = date('m',mktime(0,0,0,$month-1,1,$year));
        $prev_year = date('Y',mktime(0,0,0,$month-1,$year));
        $next_month = date('m',mktime(0,0,0,$month+1,1,$year));
        $next_year = date('Y',mktime(0,0,0,$month+1,$year));
        $calendar = "<center><h2 style='padding-bottom:10px;'>$monthName $year</h2>";
        $calendar.= "<a class='btn btn-primary btn-xs' href='?month=".$prev_month."&year=".$prev_year."'>Prev Month</a>";
        $calendar.= "<a class='btn btn-primary btn-xs' href='?month=".date('m')."&year=".date('Y')."'>Current Month</a>";
        $calendar.= "<a class='btn btn-primary btn-xs' href='?month=".$next_month."&year=".$next_year."'>Next Month</a></center>";
        $calendar.="<br><table class='table table-bordered'>";
        $calendar.="<tr>";
        foreach($daysOfWeek as $day){
            $calendar.= "<th class'header'>$day</th>";
        } 

        $calendar.="<tr></tr>";
        $currentDay= 1;
        if($dayOfWeek >0){
            for($k = 0 ; $k < $dayOfWeek; $k++){
                $calendar.="<td class='empty'></td>";
            }
        }

        $month = str_pad($month,2,"0",STR_PAD_LEFT);
        while($currentDay <= $numberDays){
            if($dayOfWeek == 7){
                $dayOfWeek = 0 ; 
                $calendar.= "<tr></tr>"; 
            }

            $currentDayRel = str_pad($currentDay,2,"0",STR_PAD_LEFT);
            $date = "$year-$month-$currentDayRel";
            $dayName = strtolower(date('l',strtotime($date)));
            $today = $date==date('Y-m-d')?'today':"";
            
            $calendar.="<td class='$today'><h4>$currentDayRel</h4> <a class='btn btn-success btn-xs'>Book</a></td>";
            $currentDay++;
            $dayOfWeek++;
        }

        if($dayOfWeek<7){
            $remainingDays = 7- $dayOfWeek;
            for($i = 0 ; $i < $remainingDays; $i++){
                $calendar.= "<td class='empty'></td>";
            }
        }

        $calendar.="</tr></table>";

        return $calendar;
    }

?>


<?php include __DIR__ . '/c_part/c_head.php' ?>
<?php include __DIR__ . '/c_part/c_nav.php' ?>

<div class="Full-Container">
    <div class="">
        <div class="opt d-flex justify-content-end align-items-center position-relative" id="sec1">
            <div class="position-absolute slider ">
                <ul class="runslide position-absolute d-flex">
                    <li class="r-first"></li>
                    <li></li>
                    <li></li>
                
                </ul>
                <ul class="slider-dots-area position-absolute">
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="calenderTable">
                <div class="col-md-3 calender-bx ">
                    <?php 
                        $dateComponents = getdate();
                        if(isset($_GET['month'])&& isset($_GET['year'])){
                            $month = $_GET['month'];
                            $year = $_GET['year'];
                        }else {
                            $month = $dateComponents['month'];
                            $year = $dateComponents['year'];
                        }

                        echo build_calendar($month,$year);
                    
                    
                    
                    ?>

                </div>
                
            </div>
        </div>
        <div class="opt d-flex justify-content-end align-items-center" id="sec2">
            <div class="optbox d-flex align-items-end justify-content-center">
                <a href="#" class="go btn btn-primary">click me</a>
            </div>
        </div>
        <div class="opt d-flex justify-content-end align-items-center" id="sec3">
            <div class="optbox d-flex align-items-end justify-content-center">
                <a href="#" class="go btn btn-primary">click me</a>
            </div>
        </div>
        <div class="opt d-flex justify-content-end align-items-center" id="sec4">
            <div class="optbox d-flex align-items-end justify-content-center">
                <a href="#" class="go btn btn-primary">click me</a>
                <a href="#" class="btn btn-primary">加購區</a>
            </div>
        </div>
        <div class="opt d-flex justify-content-end align-items-center" id="sec5">
            <div class="optbox d-flex align-items-end justify-content-center">
                <a href="#" class="btn btn-primary">結帳</a></a>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/c_part/c_scripts.php' ?>
<script>
    // $("#sec1").css("background-color","red");
    // $("#sec2").css("background-color","blue");
    // $("#sec3").css("background-color","green");
    // $("#sec4").css("background-color","pink");
    // $("#sec5").css("background-color","yellow");

    // let slideDelay = 1.5;
    // let slideDurations = 2;

    // let slides = document.querySelectorAll('.slider');

    // let numSlide = $('.slider').length;
    // for (let i = 0; i < numSlide; i++) {
    //     TweenLite.set(slides[i], {
    //         backgroundColor: Math.random() * 0xffffff,
    //         xPercent: i * 100
    //     });
    // }

    // let wrap = wrapPartial(-100, (numSlide - 1) * 100);
    // let timer = TweenLite.delayedCall(slideDelay, autoPlay);

    // let animation = TweenMax.to($('.slider'), 1, {
    //     xPercent: "+=" + (numSlide * 100),
    //     ease: Linear.easeNone,
    //     paused: true,
    //     repeat: -1,
    //     modifiers: {
    //         xPercent: wrap
    //     }
    // });

    // const proxy = document.createElement("div");
    // TweenLite.set(proxy, {
    //     x: "+=0"
    // });

    // let transform = proxy._gsTransform;
    // let slideAnimation = TweenLite.to({}, 0.1, {});
    // let slideWidth = 0;
    // let wrapWidth = 0;


    // let draggable = new Draggable(proxy, {
    //     trigger: ".slides-container",
    //     throwProps: true,
    //     onPress: updateDraggable,
    //     onDrag: updateProgress,
    //     onThrowUpdate: updateProgress,
    //     snap: {
    //         x: snapX
    //     }
    // });

    // window.addEventListener("resize", resize);

    // function updateDraggable() {
    //     timer.restart(true);
    //     sliderAnimation.kill();
    //     this.update();
    // }


    // function animateSlides(direction) {

    //     timer.restart(true);
    //     slideAnimation.kill();

    //     let x = snapX(transform.x + direction * slideWidth);

    //     slideAnimation = TweenLite.to(proxy, slideDuration, {
    //         x: x,
    //         onUpdate: updateProgress
    //     });
    // }

    // function autoPlay() {

    //     if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
    //         timer.restart(true);
    //     } else {
    //         animateSlides(-1);
    //     }
    // }

    // function updateProgress() {
    //     animation.progress(transform.x / wrapWidth);
    // }

    // function snapX(x) {
    //     return Math.round(x / slideWidth) * slideWidth;
    // }

    // function resize() {

    //     var norm = (transform.x / wrapWidth) || 0;

    //     slideWidth = slides[0].offsetWidth;
    //     wrapWidth = slideWidth * numSlides;

    //     TweenLite.set(proxy, {
    //         x: norm * wrapWidth
    //     });

    //     animateSlides(0);
    //     slideAnimation.progress(1);
    // }
    // resize();

    // function wrapPartial(min, max) {
    //     let r = max - min;
    //     return function(value) {
    //         let v = value - min;
    //         return ((r + v % r) % r) + min;
    //     }
    // }

    $imgArr = [
        
        "campRoom_s02.jpg",
        "campRoom_s03.jpg",
        "campRoom_s04.jpg",
        "campRoom_s05.jpg",
        "campRoom_s06.jpg",
        "campRoom_s01.jpg",
    ];
    $slider = $('.slider');
    $runslide = $('.runslide li');
    // $slider.css("background-image", "url(./imgs/Roomimg/campRoom_s01.jpg)");

    // function car() {

    //     $background = $slider.css("background-image");
    //     $rd = Math.floor(Math.random() * $imgArr.length);

    //     $next = $imgArr[$rd];

    //     if("url('" + $next + "')" == $background){
    //         if($rd != $imgArr.length) {
    //             $rd++;
    //         }else {
    //             $rd--;
    //         }
    //     }

    //     $slider.css("background-image", "url(./imgs/Rooming/'" + $next + "')");
    // }

    // setInterval(car, 1000);

    $runslide.css("background-image",'url(./imgs/Roomimg/campRoom_s01.jpg)')
    .next().css("background-image",'url(./imgs/Rooming/campRoom_s02.jpg)')
    .next().css("background-image",'url(./imgs/Rooming/campRoom_s03.jpg)');
    


    // $("#sec1").css("background-color", "red")
    //     .next()
    //     .css("background-color", "blue")
    //     .next()
    //     .css("background-color", "green")
    //     .next()
    //     .css("background-color", "pink")
    //     .next()
    //     .css("background-color", "yellow");
</script>

<?php include __DIR__ . '/c_part/c_foot.php' ?>