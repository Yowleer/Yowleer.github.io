/* Thêm Active class khi chọn Gear */
var header = document.getElementById("selGear");
var btns = header.getElementsByClassName("gearSel");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

/**/



/* TOGGLE CLASS cho Kỹ năng và Vật phẩm tiêu hao */
document.querySelectorAll(".tag:not(.tagPO)").forEach(item => {
  item.addEventListener("click", event => {
    item.classList.toggle("is-activated");
  })
})

/* TOGGLE CLASS cho nhóm kỹ năng duy nhất*/
var siblings = function (el) {
  if (el.parentNode === null) return [];
  return Array.prototype.filter.call(el.parentNode.children, 
function (child) {
    return child !== el;
  });
};
        // Kỹ năng duy nhất - AG
document.querySelectorAll(".tagPO").forEach(item => {
  item.addEventListener("click", event => {
 	var sib = siblings(item);
  for (var i = 0; i < sib.length; i++) {
  	sib[i].classList.remove("is-activated");
  }
  item.classList.toggle("is-activated");
  })
})

/* Select Option để thêm Input */
function noInvi_tag(id, tag, num) {       // Hàm yêu cầu Option có value đuôi chạy từ 1 lên
	var select = document.getElementById(id);
	var nhom = document.getElementsByClassName("div-ench");
  const type = num;  
  for (let i = 0; i < nhom.length; i++) {
  	let j = i + 1;
    let maThe = tag+type+j;   
		if (select.value == maThe) {		// nếu chọn option e11
  		document.getElementById(maThe).classList.remove("invi");		// thì remove .invi của div#e11
  	}		
  }
  select.value = "";	//select giữ nguyên option 1
}

        // Gọi hàm Select to remove .invi Enchant
                // VKCB
document.getElementById("vkcb-ench").addEventListener("change", function() {
  noInvi_tag("vkcb-ench", "e", 1);
})
                // VKCC
document.getElementById("vkcc-ench").addEventListener("change", function() {
  noInvi_tag("vkcc-ench", "e", 2);
})
                // GIAP
document.getElementById("giap-ench").addEventListener("change", function() {
   noInvi_tag("giap-ench", "e", 3);
})

                // cshh_CB
document.getElementById("cshh_CB").addEventListener("change", function() {
  noInvi_tag("cshh_CB", "cshh", 1);
})
                // cshh_CC
document.getElementById("cshh_CC").addEventListener("change", function() {
  noInvi_tag("cshh_CC", "cshh", 2);
})
                // cshh_GI
document.getElementById("cshh_GI").addEventListener("change", function() {
  noInvi_tag("cshh_GI", "cshh", 3);
})
/* Input của Enchant = 0 thì add .invi */
                // VKCB VKCC GIÁP CSHH .v.v..
document.querySelectorAll(".input0Del").forEach(item => {
  item.onchange = item.onkeyup = function() {
    if (item.value == 0) 
		{item.parentElement.classList.add("invi");}
  	else if (item.value != 0)
    {item.parentElement.classList.remove("invi");}
  }
})

/*DEMO*/
