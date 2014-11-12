/**
 * Created by admin on 10.11.2014.
 */
(function(){

    var app = {
        initialize: function () {
            var _this = this;

            _this.setUpListeners();

        },

        setUpListeners: function () {
            var _this = this;
            /* нажатие на ссылку */
            $('.voting a').on('click', app.setRating);

        },

        setRating: function (event) {
            var that = event.currentTarget,
                grandParent = $(that).closest('.voting').parent(),
                resultValue = $(that).context.text;

            $(that).closest('.voting').children('li').children('.cur').removeClass();

            event.preventDefault();
            $(that).addClass('cur');
            $(grandParent.children('.all-stars__result')).html('Рейтинг = ' + resultValue)
        }

    }

    app.initialize();

})();
