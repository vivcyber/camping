
        <div class="footer border-top border-white">
            <p class="text-white m-0  m-5 text-center ">@這是露營組的假前台</p>

        </div>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
        ></script>
        <script src="js/jquery-3.4.1.js"></script>
<script>
    $.get('sc-add-to-cart-api.php', function(data) {
        countCartObj(data);
    }, 'json');

    function countCartObj(data) {
        let total = 0;
        for (let i in data) {
            total += data[i];
        }
        $('.cart-count').text(total);
    }
</script>