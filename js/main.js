/*global $, window*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll
    
    $("body").niceScroll({
        
        cursorcolor: "#FF8B38",

        cursorborder: "1px solid #FF8B38",
        
        cursorwidth: "8px"
  
    });
    
    $(window).scroll(function () {
       
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
            
        } else {
            
            navbar.removeClass('scrolled');
            
        }
        
    });
    
    // Deal With Tabs
    
    $('.tab-switch li').click(function () {
        
        // Add Selected Class To Active Link
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
        // Hide All Divs
        
        $('.tabs-section .tabs-content > div').hide();
        
        // Show Div Conected With This Link
        
        $($(this).data('class')).fadeIn(1000);
        
    });
    
    // Smooth Scroll To Div
    
    $('.feature').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.tabs-section').offset().top
            
        }, 2000);
        
    });
    
    $('.about').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.awosome').offset().top
            
        }, 2000);
        
    });
    
    $('.price').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.price-options').offset().top
            
        }, 2000);
        
    });
    
    $('.review').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.testimonials').offset().top
            
        }, 2000);
        
    });
    
    $('.cont').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.contact-us').offset().top
            
        }, 2000);
        
    });
    
});