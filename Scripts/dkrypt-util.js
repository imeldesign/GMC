/*!
 * Name:        dkrypt-util
 * Version:     1.0
 * Description: Utility javascript functions and creation of the namespace
 * Author:      Kom Sihon
 * Support:     http://d-krypt.com
 *
 * Depends:
 *      jquery.js http://jquery.org
 *
 * Date: Sat Nov 10 07:55:29 2012 -0500
 */
(function(w) {
    var c = function() {
        return new c.fn.init()
    }
    c.fn = c.prototype = {
        init: function(){return this}
    }
    
    c.loadCities = function(ui) {
        var countryId = $(ui.countrySelector).val()
        $.getJSON('/ajaxHandlers/util/countryCity.php', {q: 'findAllCities', countryId: countryId}, function(response) {
            if (response.error) {
                alert (response.error)
                return
            }
            var cities = response
            var innerSelect = '<option value=""> Sélectionner ... </option>'
            for (var i=0; i<cities.length; i++) {
                var city = cities[i]
                innerSelect += '<option value="' + city.id + '"> ' + city.name + '</option>'
            }
            $(ui.citySelector).html(innerSelect)
            $(ui.citySelector).removeAttr('disabled')
        })
    }
    /**
     * Adds a spinner to the container having this jQuery selector
     * @param name a name that will be used to generate the id attribute of the spinner
     * @param selector jQuery selector of the container where to display the spinner
     * @param position where to show the spinner relatively to the selector. Can
     *        be one of:
     *        <pre>
     *          <b>'inside'</b> The spinner is added inside the element with the given selector
     *          <b>'next'</b> The spinner is added next to the component with the given selector
     *          <b>'below'</b> The spinner is added below the component with the given selector
     *        </pre>
     */
    c.addSpinner = function(name, selector, position) {
        var height = $(selector).css('height')
        height = height.substr(0, height.length - 2)
        var $spinner = $('#spinner-' + name)
        if ($spinner.is('div')) return//means that the spinner already exists
        $spinner = $('<div></div>').attr('id', 'spinner-' + name)
        if (!position) position = 'next'
        if (position == 'below') $spinner.css({clear: 'both', marginTop: '5px'}).css('float', $(selector).css('float'))
        if (position == 'inside') {
            if (name == 'small') $spinner.css({height: '100%', width: '100%'})
            else if (name == 'medium') $spinner.css({height: '100%', width: '100%'})
            else if (name == 'big') $spinner.css({height: '100%', width: '100%'})
            $spinner.hide().appendTo(selector).fadeIn('slow')
        }
        else {
            if (position == 'next') $spinner.css({marginTop: $(selector).css('margin-top'), marginLeft: '5px'})
            $spinner.hide().insertAfter(selector).fadeIn('slow')
        }
    }
    
    /**
     * Removes spinner of type n to the container where it was
     * @param name name of the spinner previously given when calling <pre>addSpinner(name, selector)</pre>
     * @param fn a callback to execute when the spinner has been removed
     */
    c.removeSpinner = function(name, fn) {
        $('#spinner-' + name).fadeOut('slow', function() { 
            $(this).remove()
            if (fn) fn()
        })
    }
    
     Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
       var n = this,
       decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 0 : decPlaces,
       decSeparator = decSeparator == undefined ? "," : decSeparator, thouSeparator = thouSeparator == undefined ? "." : thouSeparator,
       sign = n < 0 ? "-" : "",
       i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
       j = (j = i.length) > 3 ? j % 3 : 0;
       return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
   }
   
    c.CookieUtil = {
        get: function (name) {
            var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(';', cookieStart)
                if (cookieEnd == -1){
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },
        set: function (name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + '=' +
            encodeURIComponent(value);
            if (expires instanceof Date) {
                cookieText += '; expires=' + expires.toGMTString();
            }
            if (path) {
                cookieText += '; path=' + path;
            }
            if (domain) {
                cookieText += '; domain=' + domain;
            }
            if (secure) {
                cookieText += '; secure';
            }
            document.cookie = cookieText;
        },
        unset: function (name, path, domain, secure){
            this.set(name, '', new Date(0), path, domain, secure);
        }
    }
                
    c.initPayPal = function(trigger, data, f1, f2) {
        $.getJSON('/ajaxHandlers/paypal/SetExpressCheckout.php', data, function(response) {
            if (response.error) {
                f1()
            } else {
                yamo.paypalRedirectURL = response.redirectURL
                loadPayPalScriptAndInitLightBox(trigger, f2)
            }
        })
    }         
    
    function loadPayPalScriptAndInitLightBox(trigger, fn) {
        $.getScript('https://www.paypalobjects.com/js/external/dg.js', function() {
            var dg1 = new PAYPAL.apps.DGFlow({trigger: trigger});  
            function MyEmbeddedFlow(embeddedFlow) {
                this.embeddedPPObj = embeddedFlow;
                this.paymentSuccess = function() {
                    this.embeddedPPObj.closeFlow();
                    window.location.href = 'http://' + window.location.hostname + '/ajaxHandlers/paypal/ReviewOrder.php';
                };
                this.paymentCanceled = function() {
                    this.embeddedPPObj.closeFlow();
                    window.location.href = 'unknownError.php';
                };
            }
            var ef1 = new MyEmbeddedFlow(dg1);
            if (fn) fn()
        })
    }
    c.slideLeft = function(selector) {
        $(selector).children(':first').animate({marginLeft: -260}, 'slow', 'swing', function() {
            $(this).appendTo(selector).css('margin-left', 10)
        })
    }
    c.slideRight = function(selector) {
        $(selector).children(':last').width(0).prependTo(selector).animate({width: '244px'}, 'slow', 'swing')

    }
    w.yamo = c /*Creating the elc namespace stYde for all this*/
})(window)