function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function () {

  // refresh page when #start-over-button is clicked
  $("#start-over-button").on("click", function () {
    location.reload();
  });

  // #start-button click handler
  $("#start-button").on("click", function () {
    // hide #start-now-controls
    $("#start-now-controls").addClass("hidden");

    // hide start step
    $("#start-step").addClass('hidden');

    // show first step
    $("#bottom-controls").removeClass('hidden');
    $("#step-1").removeClass('hidden');

  });

  var final_data = {};
  function print_details(){

    // change next button content
    $("#next-button").html(`
      <div class="mx-[120px]">
        <svg aria-hidden="true" class="w-10 h-10  text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
    `);

    // disable next button
    $("#next-button").prop("disabled", true);

    // disable back button
    $("#back-button").addClass('opacity-0').prop("disabled", true);


    // call /print-details
    $.ajax({
      url: "/print-details/",
      type: "POST",
      data: JSON.stringify(final_data),
      contentType: "application/json; charset=utf-8",
      dataType: "text",
      success: function (data) {
        // hide button controls div
        $("#button-controls").addClass("hidden");

        // show start-over-controls div
        $("#start-over-controls").removeClass("hidden");

        // hide all .step
        $(".step").each((index, step) => {
          $(step).addClass("hidden");
        });

        // display #last-step
        $("#last-step").removeClass("hidden");

        // reload page after 5 seconds
        setTimeout(function () {
        location.reload(true);
      }, 5000);
        
      }
    });

  }
  var patty_inline_style = "margin-bottom: -160px;";
  let patties = [
    {
      id: 1,
      name: "Chicken",
      price_single: 6.20,
      price_double: 6.20 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-1.png",
      inline_style: patty_inline_style
    },
    {
      id: 2,
      name: "Faschirtes",
      price_single: 6.10,
      price_double: 6.10 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-2.png",
      inline_style: patty_inline_style
    },
    {
      id: 3,
      name: "Beef",
      price_single: 6.70,
      price_double: 6.70 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-3.png",
      inline_style: patty_inline_style
    },
    {
      id: 4,
      name: "Kasspress",
      price_single: 6.50,
      price_double: 6.50 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-4.png",
      inline_style: patty_inline_style
    },
    {
      id: 5,
      name: "Backendl",
      price_single: 6.40,
      price_double: 6.40 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-5-v3.png",
      inline_style: patty_inline_style
    },
    {
      id: 6,
      name: "Schnitzel",
      price_single: 6.40,
      price_double: 6.40 + 1.10,
      type: "patty",
      image: "/static/images/incredients/patty-6-v2.png",
      inline_style: patty_inline_style
    },
  ];

  // sauce 
  var sauce_inline_style = "margin-bottom: -190px;";
  let sauces = [
    {
      id: 1,
      name: "Ketshup",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-1.png",
      inline_style: sauce_inline_style
    },
    {
      id: 2,
      name: "Cooktail",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-2.png",
      inline_style: sauce_inline_style
    },
    {
      id: 3,
      name: "Sauerrahm",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-3.png",
      inline_style: sauce_inline_style
    },
    {
      id: 4,
      name: "BBQ",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-3.png",
      inline_style: sauce_inline_style
    },
    {
      id: 5,
      name: "Chili 🌶️",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-3.png",
      inline_style: sauce_inline_style
    },
    {
      id: 6,
      name: "Majonäse",
      price: 0,
      type: "sauce",
      image: "/static/images/incredients/sauce-3.png",
      inline_style: sauce_inline_style
    },
  ];

  var topping_inline_style = "margin-bottom: -190px;";
  let toppings = [
    {
      id: 1,
      name: "Cheddar",
      price: 0.30,
      type: "topping",
      image: "/static/images/incredients/cheese-1.png",
      inline_style: topping_inline_style
    },
    {
      id: 2,
      name: "Emmentaler",
      price: 0.30,
      type: "topping",
      image: "/static/images/incredients/cheese-2.png",
      inline_style: topping_inline_style
    },
    {
      id: 3,
      name: "Baccon",
      price: 0.40,
      type: "topping",
      image: "/static/images/incredients/cheese-3.png",
      inline_style: "margin-bottom: -214px; margin-top: 32px;"
    },
  ];

  var incredient_inline_style = "margin-bottom: -190px;";
  let incredients = [
    {
      id: 1,
      name: "Gurke",
      price: 0.10,
      type: "incredient",
      image: "/static/images/incredients/incredient-1-v2.png",
      inline_style: incredient_inline_style
    },
    {
      id: 2,
      name: "Pfefferoni",
      price: 0.10,
      type: "incredient",
      image: "/static/images/incredients/incredient-2.png",
      inline_style: incredient_inline_style
    },
    {
      id: 3,
      name: "Salat",
      price: 0.10,
      type: "incredient",
      image: "/static/images/incredients/incredient-3.png",
      inline_style: "margin-bottom: -170px;"
    },
    {
      id: 4,
      name: "Zwiebel",
      price: 0.10,
      type: "incredient",
      image: "/static/images/incredients/incredient-4.png",
      inline_style: incredient_inline_style
    },
    {
      id: 5,
      name: "Tomate",
      price: 0.10,
      type: "incredient",
      image: "/static/images/incredients/incredient-5.png",
      inline_style: "margin-bottom: -170px; margin-top: 10px;"
    },
  ];

  let burger_type_selection = "single";
  let selected_patty = patties[0];
  let selected_sauce = {};
  let selected_topping = {};
  let incredient_counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5:0
  };

  function reset_incredient_counts(){
    incredient_counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5:0
    };
  }

  let currentStepIndex = 0;
  

  function update_details_table(layers) {
    console.log(layers);
    final_layers = [];
    // #detail-table-body
    const detail_table_body = $("#detail-table-body");
    detail_table_body.empty();

    var total_price = 0;

    var freeIncredients = 2;
    var totalIncredientsPrice = 0;
    var totalSelectedIncredients = 0;
    var totalPattyPrice = 0;
    var totalToppingPrice = 0;

    // loop over each incredient and add total price after free incredients
    layers.forEach((layer) => {
      if (layer.type === "incredient"){
        totalSelectedIncredients += layer.quanity;
      }
    });

    // calculate total incredient price
    if (totalSelectedIncredients > freeIncredients){
      totalIncredientsPrice = (totalSelectedIncredients - freeIncredients) * incredients[0].price;
    } else {
      totalIncredientsPrice = 0;
    }


    // calculate total topping price
    if (burger_type_selection === "single"){
      totalToppingPrice = selected_topping.price;
    } else {
      totalToppingPrice = selected_topping.price * 2;
    }

    // calculate total patty price
    if (burger_type_selection === "single"){
      totalPattyPrice = selected_patty.price_single;
    } else {
      totalPattyPrice = selected_patty.price_double;
    }

    total_price = totalIncredientsPrice + totalToppingPrice + totalPattyPrice;

    final_data = {
      "total_price": total_price.toFixed(2),
    }

    // add burger type
    const row = `
      <tr>
        <td class="whitespace-nowrap py-2 pl-4 pr-3 text-md  text-gray-900 sm:pl-6">
        Burger Type
        </td>
        <td class="whitespace-nowrap px-3 py-2 text-md text-gray-500">${burger_type_selection.toUpperCase()}</td>
      </tr>
      `;
    detail_table_body.append(row);
    final_layers.push(
      {
        name: "Burger Type",
        value: burger_type_selection.toUpperCase()
      }
    );

    // add patty
    const row2 = `
      <tr>
        <td class="whitespace-nowrap py-2 pl-4 pr-3 text-md  text-gray-900 sm:pl-6">
        Patty: ${selected_patty.name}
        </td>
        <td class="whitespace-nowrap px-3 py-2 text-md text-gray-500">${burger_type_selection === "single" ? 1 : 2}</td>
      </tr>
    `;
    detail_table_body.append(row2);
    final_layers.push(
      {
        name: `Patty: ${selected_patty.name}`,
        value: burger_type_selection === "single" ? 1 : 2
      }
    );

    // add topping
    const row3 = `
      <tr>
        <td class="whitespace-nowrap py-2 pl-4 pr-3 text-md  text-gray-900 sm:pl-6">
        Cheeze/Baccon: ${selected_topping.name}
        </td>
        <td class="whitespace-nowrap px-3 py-2 text-md text-gray-500">${burger_type_selection === "single" ? 1 : 2}</td>
      </tr>
    `;
    detail_table_body.append(row3);
    final_layers.push(
      {
        name: `Cheeze/Baccon: ${selected_topping.name}`,
        value: burger_type_selection === "single" ? 1 : 2
      }
    );


    // add sauce
    const row4 = `
      <tr>
        <td class="whitespace-nowrap py-2 pl-4 pr-3 text-md  text-gray-900 sm:pl-6">
        Sauce: ${selected_sauce.name}
        </td>
        <td class="whitespace-nowrap px-3 py-2 text-md text-gray-500">${ burger_type_selection === 'single' ? 2 : 3 }</td>
      </tr>
    `;
    detail_table_body.append(row4);
    final_layers.push(
      {
        name: `Sauce: ${selected_sauce.name}`,
        value: burger_type_selection === 'single' ? 2 : 3
      }
    );

    // add incredients
    layers.forEach((layer) => {
      if (layer.type === "incredient"){
        const row = `
        <tr>
          <td class="whitespace-nowrap py-2 pl-4 pr-3 text-md  text-gray-900 sm:pl-6">
          Incredient: ${layer.name}
          </td>
          <td class="whitespace-nowrap px-3 py-2 text-md text-gray-500">${layer.quanity}</td>
        </tr>
        `;
        detail_table_body.append(row);
        final_layers.push(
          {
            name: `Incredient: ${layer.name}`,
            value: layer.quanity
          }
        );
      }
    });

    // add total details
    $("#total-price").text(`€${total_price.toFixed(2)}`);

    final_data['layers'] = final_layers;

  }

  function add_sauce(layers){
    if (Object.keys(selected_sauce).length > 0){
      layers.push(
        {
          name: selected_sauce.name,
          image: selected_sauce.image,
          inline_style: selected_sauce.inline_style,
          price: selected_sauce.price,
          type: selected_sauce.type,
          quanity: 1,
        }
      );
    }
  }

  function add_topping(layers){
    if (Object.keys(selected_topping).length > 0){
      layers.push(
        {
          name: selected_topping.name,
          image: selected_topping.image,
          inline_style: selected_topping.inline_style,
          price: selected_topping.price,
          type: selected_topping.type,
          quanity: 1
        }
      );
    }
  }

  function add_incredients(layers){
    if(incredient_counts[3] > 0){
      layers.push(
        {
          name: incredients[2].name,
          image: incredients[2].image,
          inline_style: incredients[2].inline_style,
          price: incredients[2].price,
          type: incredients[2].type,
          quanity: incredient_counts[3]
        }
      );
    }

    if(incredient_counts[2] > 0){
      layers.push(
        {
          name: incredients[1].name,
          image: incredients[1].image,
          inline_style: incredients[1].inline_style,
          price: incredients[1].price, 
          type: incredients[1].type,
          quanity: incredient_counts[2]
        }
      );
    }

    if(incredient_counts[5] > 0){
      layers.push(
        {
          name: incredients[4].name,
          image: incredients[4].image,
          inline_style: incredients[4].inline_style,
          price: incredients[4].price,
          type: incredients[4].type,
          quanity: incredient_counts[5]
        }
      );
    }

    

    if(incredient_counts[1] > 0){
      layers.push(
        {
          name: incredients[0].name,
          image: incredients[0].image,
          inline_style: incredients[0].inline_style,
          price: incredients[0].price,
          type: incredients[0].type,
          quanity: incredient_counts[1]
        }
      );
    }

    if(incredient_counts[4] > 0){
      layers.push(
        {
          name: incredients[3].name,
          image: incredients[3].image,
          inline_style: incredients[3].inline_style,
          price: incredients[3].price,
          type: incredients[3].type,
          quanity: incredient_counts[4]
        }
      );
    }
  }

  function render_burger(layers) {
    $(".burger-canvas").each((index, canvas) => {

      $(canvas).empty();
      const totalLayers = layers.length;
      currentZIndex = totalLayers;
  
      layers.forEach((layer) => {
        const burgerLayer = `
          <img class="relative" src="${layer.image}"  style="${layer.inline_style} z-index:${currentZIndex}">
          `;
  
        $(canvas).append(burgerLayer);
        currentZIndex -= 1;
      });
    });
  }
  function buildBurger() {
    
    var layers = [];

    // top bun part
    layers.push(
      {
        name: "top bun",
        image: "static/images/incredients/burger-top-v2.png",
        inline_style: "margin-bottom: -170px;",
        type: "bun",
        price: 0,
        quanity: 1
      }
    );

    // add sauce
    add_sauce(layers);

    // add incredients
    add_incredients(layers);

    // add patty or patties
    if (burger_type_selection === "single"){
      // add topping
      add_topping(layers);
      // add only patty
      layers.push(
        {
          name: selected_patty.name,
          image: selected_patty.image,
          inline_style: selected_patty.inline_style,
          price: selected_patty.price_single,
          quanity: 1
        }
      );
    } else {
      // add topping
      add_topping(layers);
      // first patty
      layers.push(
        {
          name: selected_patty.name,
          image: selected_patty.image,
          inline_style: selected_patty.inline_style,
          price: selected_patty.price_single,
          quanity: 1
        }
      );

      // add sauce
      add_sauce(layers);

      // middle bun
      layers.push(
        {
          name: "middle bun",
          image: "static/images/incredients/burger-bottom.png",
          inline_style: "margin-bottom: -170px;",
          price: 0,
          quanity: 1
        }
      );
      // add topping
      add_topping(layers);
      // second patty
      layers.push(
        {
          name: selected_patty.name,
          image: selected_patty.image,
          inline_style: selected_patty.inline_style,
          price: selected_patty.price_single,
          quanity: 1
        }
      );
    }

    // add sauce
    add_sauce(layers);

    // bottom bun part
    layers.push(
      {
        name: "bottom bun",
        image: "static/images/incredients/burger-bottom.png",
        inline_style: "margin-bottom: -150px;",
        price: 0,
        quanity: 1
      }
    );

    render_burger(layers);

    // also update details table
    update_details_table(layers);
  }

 

  // handling step 1
  function select_burger_type(burger_type, item) {
    const activeClasses =
      "p-2 rounded-md border-solid border-8 border-red-500 burger-type-item";
    const inactiveClasses = "p-2 rounded-md burger-type-item";

    burger_type_selection = burger_type;
    if (burger_type === "single") {
      $(item).removeClass().addClass(activeClasses);
      $(item).next().removeClass().addClass(inactiveClasses);
    } else {
      $(item).removeClass().addClass(activeClasses);
      $(item).prev().removeClass().addClass(inactiveClasses);
    }
  }

  $(".burger-type-item").on("click", function () {
    // Get the value of the data-type attribute
    const burgerType = $(this).data("type");
    select_burger_type(burgerType, this);
  });

  select_burger_type(burger_type_selection, $(".burger-type-item")[0]);

  // handling step 2
  function render_patties() {
    const patty_container = $("#patty-container");
    patty_container.empty();
    patties.forEach((patty) => {
      const patty_item = `
        <div class="p-2  patty-type-item " data-id="${patty.id}">
            <div class="rounded overflow-hidden shadow-lg  bg-white">
            <div>
                <img class="mx-auto" src="${patty.image}">
            </div>
            <div class="py-4 bg-gray-200 mt-4">
                <h3 class="text-4xl font-primary text-center">${patty.name}</h3>
                <h3 class="text-2xl  text-center">€ ${burger_type_selection === "single" ? patty.price_single.toFixed(2) : patty.price_double.toFixed(2)}</h3>
            </div>
            </div>
        </div>
        `;

      patty_container.append(patty_item);
    });
  }

  render_patties();

  function select_patty(patty_id) {
    console.log('selecting patty: ' + patty_id)
    const activeClasses =
      "p-2  patty-type-item rounded-md border-solid border-8 border-red-500";
    const inactiveClasses = "p-2 rounded-md patty-type-item";

    selected_patty = patties.find((patty) => patty.id === patty_id);
    var item = $(`.patty-type-item[data-id="${patty_id}"]`);
    $(item).removeClass().addClass(activeClasses);
    $(item).siblings().removeClass().addClass(inactiveClasses);

    buildBurger();
  }

  
  select_patty(selected_patty.id);
  
  $(document).on("click", ".patty-type-item", function () {
      // Get the value of the data-type attribute
      const pattyId = $(this).data("id");
      console.log(pattyId);
      select_patty(pattyId);
  });


  // handling step 3 - sauces
  function render_sauces() {
    const sauce_container = $("#sauce-container");
    sauce_container.empty();
    sauces.forEach((sauce) => {
      const sauce_item = `
        <div class="p-2  sauce-type-item " data-id="${sauce.id}">
            <div class="rounded overflow-hidden shadow-lg  bg-white">
            <div>
                <img class="mx-auto" src="${sauce.image}">
            </div>
            <div class="py-4 bg-gray-200 mt-4">
                <h3 class="text-4xl font-medium text-center">${sauce.name}</h3>
            </div>
            </div>
        </div>
        `;
      sauce_container.append(sauce_item);
    });

  }

  function select_sauce(sauce_id) {
    console.log('selecting sauce: ' + sauce_id)
    const activeClasses =
      "p-2  sauce-type-item rounded-md border-solid border-8 border-red-500";
    const inactiveClasses = "p-2 rounded-md sauce-type-item";

    selected_sauce = sauces.find((sauce) => sauce.id === sauce_id);
    var item = $(`.sauce-type-item[data-id="${sauce_id}"]`);
    $(item).removeClass().addClass(activeClasses);
    $(item).siblings().removeClass().addClass(inactiveClasses);
    // display next button if we have selected a sauce
    enable_next_button();
    buildBurger();
  }

  render_sauces();

  $(document).on("click", ".sauce-type-item", function () {
      // Get the value of the data-type attribute
      const sauceId = $(this).data("id");
      console.log(sauceId);
      select_sauce(sauceId);
  });

  // handling step 4 - toppings
  function render_toppings() {
    const topping_container = $("#topping-container");
    topping_container.empty();
    toppings.forEach((topping) => {
      const topping_item = `
        <div class="p-2  topping-type-item " data-id="${topping.id}">
            <div class="rounded overflow-hidden shadow-lg  bg-white">
            <div>
                <img class="mx-auto" src="${topping.image}">
            </div>
            <div class="py-4 bg-gray-200 mt-4">
                <h3 class="text-4xl font-primary text-center">${topping.name}</h3>
                <h3 class="text-2xl  text-center">€${burger_type_selection === "single" ? topping.price.toFixed(2) : (topping.price * 2).toFixed(2)}</h3>
            </div>
            </div>
        </div>
        `;
      topping_container.append(topping_item);
    });
  }

  

  render_toppings();

  function select_topping(topping_id) {
    console.log('selecting topping: ' + topping_id)
    const activeClasses =
      "p-2  topping-type-item rounded-md border-solid border-8 border-red-500";
    const inactiveClasses = "p-2 rounded-md topping-type-item";

    selected_topping = toppings.find((topping) => topping.id === topping_id);
    var item = $(`.topping-type-item[data-id="${topping_id}"]`);
    $(item).removeClass().addClass(activeClasses);
    $(item).siblings().removeClass().addClass(inactiveClasses);
    // display next button if we have selected a topping
    enable_next_button();
    buildBurger();
  }

  $(document).on("click", ".topping-type-item", function () {
    // Get the value of the data-type attribute
    const toppingId = $(this).data("id");
    console.log(toppingId);
    select_topping(toppingId);
  });

  // handing step 5 - incredients
  function render_incredients() {
    const incredient_container = $("#incredient-container");
    incredient_container.empty();
    incredients.forEach((incredient) => {
      const incredient_item = `
      <div class="rounded overflow-hidden shadow-lg  bg-white">
      <div>
          <img class="mx-auto" src="${incredient.image}">
      </div>
      <div class="pt-4 bg-gray-200 mt-4">
          <h3 class="text-4xl font-primary text-center">${incredient.name}</h3>
          <hr class="bg-black">
          <div class="flex justify-between items-center">
            <button class="py-4 pl-4 pr-8 decrease-count" data-id="${incredient.id}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
            <div class="text-2xl incredient-count font-medium" data-id="${incredient.id}">0</div>
            <button class="py-4 pr-4 pl-8 increase-count" data-id="${incredient.id}">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </button>
          </div>
      </div>
    </div>
        `;
      incredient_container.append(incredient_item);
    });
  }

  render_incredients();

  // increase incredient count
  $(document).on("click", ".increase-count", function () {
    // Get the value of the data-type attribute
    const incredientId = $(this).data("id");
    var current_count = incredient_counts[incredientId];
    if (current_count < 10){
      var incredient_count = $(`.incredient-count[data-id="${incredientId}"]`);
      incredient_count.text(current_count + 1);
      incredient_counts[incredientId] = current_count + 1;
      console.log(incredient_counts);
      buildBurger();
      enable_next_button();
    }
  });

  // decrease incredient count
  $(document).on("click", ".decrease-count", function () {
    // Get the value of the data-type attribute
    const incredientId = $(this).data("id");
    var current_count = incredient_counts[incredientId];
    if (current_count > 0){
      var incredient_count = $(`.incredient-count[data-id="${incredientId}"]`);
      incredient_count.text(current_count - 1);
      incredient_counts[incredientId] = current_count - 1;
      console.log(incredient_counts);
      buildBurger();
    }

    // check if all counts are 0
    var all_counts_zero = true;
    for (var key in incredient_counts) {
      if (incredient_counts[key] > 0){
        all_counts_zero = false;
      }
    }

    if (all_counts_zero){
      disable_next_button();
    }
  });

  const steps = $(".step");

  function enable_next_button(){
    $("#next-button").removeClass("opacity-0").prop("disabled", false);
  }

  function disable_next_button(){
    $("#next-button").addClass("opacity-0").prop("disabled", true);
  }

  function disable_back_button(){
    $("#back-button").addClass("opacity-0").prop("disabled", true);
  }

  function enable_back_button(){
    $("#back-button").removeClass("opacity-0").prop("disabled", false);
  }

     // handling next button navigation
  $("#next-button").on("click", function () {
    if (currentStepIndex === steps.length - 1) {
      print_details();
      return;
    }

    
    const currentStep = $(steps[currentStepIndex]);
    const nextStep = $(steps[currentStepIndex + 1]);
    currentStepIndex += 1;

    // hide all steps
    steps.each((index, step) => {
      $(step).addClass("hidden");
    });

    // show next step
    $(nextStep).removeClass("hidden");

    // currentStep.fadeOut(400, function () {
    //   currentStep.addClass("hidden");
    //   nextStep.removeClass("hidden");
    //   nextStep.fadeIn(400);
    // });

    // sleep for 400ms
    sleep(400);

    if (currentStepIndex > 0) {
      console.log('enabling back button');
      enable_back_button();
    }

    // rerender patties if we are on step 2
    if (currentStepIndex === 1) {
        selected_patty = patties[0];
        render_patties();
        select_patty(selected_patty.id);
    }

    // hide next button if we are on step 3 = index 2
    if (currentStepIndex == 2) {
      disable_next_button();
    }
    
    // hide next button if we are on step 4 = index 3
    if (currentStepIndex == 3) {
      disable_next_button();
    }

    // hide next button if we are on step 5 = index 4
    if (currentStepIndex == 4) {
      disable_next_button();
    }

    // change next button text to "Finish" if we are on step 6 = index 5
    if (currentStepIndex == 5) {
      $("#next-button").html(`
      <img src="/static/images/printer.png" class="w-8 h-8 inline-block mr-2"> PRINT NOW
      `);
    }

    // // rerender patties if we are on step 2
    // if (currentStepIndex === 1) {
    //     selected_patty = patties[0];
    //     render_patties();
    //     select_patty(selected_patty.id);
    // }

    // // rerender sacues if we are on step 3
    // if (currentStepIndex === 2) {
    //   selected_sauce = {};
    //   render_sauces();
    //   // hide next button if we are on step 3
    //   disable_next_button();
    // }

    // // rerender toppings if we are on step 4
    // if (currentStepIndex === 3) {
    //   selected_topping = {};
    //   render_toppings();
    //   // hide next button if we are on step 4
    //   disable_next_button();
    // }

    // // rerender incredients if we are on step 5
    // if (currentStepIndex === 4) {
    //   reset_incredient_counts();
    //   render_incredients();
    //   buildBurger();
    // }

    // // display back button if we are on step 2
    // if (currentStepIndex == 1) {
    //   enable_back_button();
    // }
    
  });



  // handling back button navigation
  $("#back-button").on("click", function () {
    disable_back_button();
    if (currentStepIndex === 0) {
      return;
    }

    const currentStep = $(steps[currentStepIndex]);
    const prevStep = $(steps[currentStepIndex - 1]);
    // Update the current step index
    currentStepIndex -= 1;

    // hide all steps 
    steps.each((index, step) => {
      $(step).addClass("hidden");
    });

    // show previous step
    $(prevStep).removeClass("hidden");

    // currentStep.fadeOut(400, function () {
    //   currentStep.addClass("hidden");
    //   prevStep.removeClass("hidden");
    //   prevStep.fadeIn(400);
    // });

    // sleep for 400ms
    sleep(400);

    


    // enable next button if we are on step 2 = index 1, also reset selected sauce
    if (currentStepIndex == 1) {
      enable_next_button();
      selected_sauce = {};
      render_sauces();
      buildBurger();
    }

    // enable next button if we are on step 3 = index 2, also reset selected topping
    if (currentStepIndex == 2) {
      enable_next_button();
      selected_topping = {};
      render_toppings();
      buildBurger();
    }

    // enable next button if we are on step 4 = index 3, also reset selected incredients
    if (currentStepIndex == 3) {
      enable_next_button();
      reset_incredient_counts();
      render_incredients();
      buildBurger();
    }

    // change next button text to "Next" if we are on step 5 = index 4
    if (currentStepIndex == 4) {
      $("#next-button").html(`
      Next
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -mr-6 ml-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      `);
    }


    // // remove sauces if current step is 1
    // if (currentStepIndex == 1) {
    //   selected_sauce = {};
    //   buildBurger();
    // }

    // // remove topping if current step is 2
    // if (currentStepIndex == 2) {
    //   selected_topping = {};
    //   buildBurger();
    // }

    // // hide back button if we are on step 1
    // if (currentStepIndex == 0) {
    //   disable_back_button();
    // }

    // // show next button on step 0 and 1
    // if (currentStepIndex < 2) {
    //   enable_next_button();
    // }
    
    enable_back_button();

    // disable back button if we are on step 1 = index 0
    console.log('current step index: ' + currentStepIndex);
    if (currentStepIndex == 0) {
      disable_back_button();
    }

  });
});


