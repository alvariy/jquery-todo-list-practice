$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }
        $("#button").click(function(){
                $("#checklist").append('<li id="'+ generateUUID() +'" class="unchecked"> <input name="done-todo" type="checkbox" class="done-todo"  name="li-to-do"> ' + $("#todoItem").val() +' </li>');
//                $("#checklist").append('<input name="done-todo" type="checkbox" class="done-todo"> ' + $("#todoItem").val());
                $("#todoItem").val("");
          });

        $("#all").click(function(){

                if( $("#all").hasClass() == true)
                {
                        $("#all").removeClass("selected");
                        $("#active").removeClass("selected");
                         $("#complete").removeClass("selected");
                }
                else
                {
                         $("#all").addClass("selected");
                         $("#active").removeClass("selected");
                          $("#complete").removeClass("selected");
                }
                $("li[name='li-to-do']").show();
                $(".unchecked").show();
                $(".checked").show();

                  });


       $("#active").click(function(){

                    if( $("#active").hasClass() == true)
                    {
                            $("#active").removeClass("selected");
                            $("#all").removeClass("selected");
                             $("#complete").removeClass("selected");
                    }
                    else
                    {
                             $("#active").addClass("selected");
                             $("#all").removeClass("selected");
                              $("#complete").removeClass("selected");
                    }
                                        $("li[name='li-to-do']").show();
                                        $(".checked").hide();
//                        $("#checklist").hide();
                      });


       $("#complete").click(function(){

                    if( $("#complete").hasClass() == true)
                    {
                            $("#complete").removeClass("selected");
                            $("#all").removeClass("selected");
                            $("#active").removeClass("selected");
                    }
                    else
                    {
                             $("#complete").addClass("selected");
                             $("#all").removeClass("selected");
                             $("#active").removeClass("selected");

                    }
                          $("li[name='li-to-do']").show();
                            $(".checked").show();
                            $(".unchecked").hide();
                      });

// only pre defined tags can listen to this
//       $('li input').on("click",function(){
//
//                    if($(this).parent().hasClass("checked") == true)
//                    {
//                    $(this).parent().removeClass("checked");
//                    }
//                    else
//                    {
//                    $(this).parent().addClass("checked");
//                    }
//
//
////                    $(this).parent().addClass("checked");
////                    $("#checklist").hide();
//
// });

//after append you have to refer to the class for some dynamic action
        $('#checklist').on("click",".done-todo",function(){

        if($(this).parent().hasClass("checked") == true)
                            {
                            $(this).parent().removeClass("checked").addClass("unchecked");
                            }
                            else
                            {
                            $(this).parent().addClass("checked").removeClass("unchecked");;
                            }

         });
        // code to be implemented
    });










