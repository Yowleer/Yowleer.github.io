import {vkCB, vkCC, GIAP, ccAffix, cbAffix, giAffix} from './item.js'

/* Tạo dropdown list cho: vkCB, vkCC, GIAP dựa vào gearSel */
var vkcbSel = document.getElementById("vkcb");
var vkccSel = document.getElementById("vkcc");
var giapSel = document.getElementById("giap");
window.onload = function() {  
  // Create first load select option for A-Gear (default)
  for (var y in vkCB["A-Gear"]) {
    vkcbSel.options[vkcbSel.options.length] = new Option(y, y);
  }
  for (var z in vkCC["A-Gear"]) {
    vkccSel.options[vkccSel.options.length] = new Option(z, z);
  }
  for (var k in GIAP["A-Gear"]) {
    giapSel.options[giapSel.options.length] = new Option(k, k);
  }
  /* Create list of items Affixes */
  // List of VKCB affixes
  var cbPreSel = document.getElementById("vkcb-dau");
  var cbSufSel = document.getElementById("vkcb-duoi");
  for (let i in cbAffix["prefix"]) {
    cbPreSel.options[cbPreSel.options.length] = new Option(i, i);
  }  
  for (let i in cbAffix["suffix"]) {
    cbSufSel.options[cbSufSel.options.length] = new Option(i, i); 
  }
  cbPreSel.options[0].value = "";
  cbSufSel.options[0].value = "";
  // Update preview on change of affixes
  cbPreSel.onchange = cbPreSel.onclick= function() {
    let labelCB = document.getElementById("labelCB");
    let span = labelCB.getElementsByTagName("span");
    span[0].innerHTML = cbPreSel.value;
  }
  cbSufSel.onchange = cbSufSel.onclick= function() {
    let labelCB = document.getElementById("labelCB");
    let span = labelCB.getElementsByTagName("span");
    span[2].innerHTML = cbSufSel.value;
  }
  // List of VKCC affixes
  var ccPreSel = document.getElementById("vkcc-dau");
  var ccSufSel = document.getElementById("vkcc-duoi");
  for (let i in ccAffix["prefix"]) {
    ccPreSel.options[ccPreSel.options.length] = new Option(i, i);
  }  
  for (let i in ccAffix["suffix"]) {
    ccSufSel.options[ccSufSel.options.length] = new Option(i, i); 
  }
  ccPreSel.options[0].value = "";
  ccSufSel.options[0].value = "";
  // Update preview on change of affixes
  ccPreSel.onchange = ccPreSel.onclick= function() {
    let labelCC = document.getElementById("labelCC");
    let span = labelCC.getElementsByTagName("span");
    span[0].innerHTML = ccPreSel.value;
  }
  ccSufSel.onchange = ccSufSel.onclick= function() {
    let labelCC = document.getElementById("labelCC");
    let span = labelCC.getElementsByTagName("span");
    span[2].innerHTML = ccSufSel.value;
  }
  // List of GIAP affixes
  var giPreSel = document.getElementById("giap-dau");
  var giSufSel = document.getElementById("giap-duoi");
  for (let i in giAffix["prefix"]) {
    giPreSel.options[giPreSel.options.length] = new Option(i, i);
  }  
  for (let i in giAffix["suffix"]) {
    giSufSel.options[giSufSel.options.length] = new Option(i, i); 
  }
  giPreSel.options[0].value = "";
  giSufSel.options[0].value = "";
  // Update preview on change of affixes
  giPreSel.onchange = giPreSel.onclick= function() {
    let labelGI = document.getElementById("labelGI");
    let span = labelGI.getElementsByTagName("span");
    span[0].innerHTML = giPreSel.value;
  }
  giSufSel.onchange = giSufSel.onclick= function() {
    let labelGI = document.getElementById("labelGI");
    let span = labelGI.getElementsByTagName("span");
    span[2].innerHTML = giSufSel.value;
  }

  /* Update lists of items when select Gear */
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      //empty vkcb, vkcc and giap- dropdowns
      vkcbSel.length = 0;
      vkccSel.length = 0;
      giapSel.length = 0;
      //update lists of vkcb, vkcc, giap
      for (var y in vkCB[this.innerHTML]) {
        vkcbSel.options[vkcbSel.options.length] = new Option(y, y);
      }
      for (var z in vkCC[this.innerHTML]) {
        vkccSel.options[vkccSel.options.length] = new Option(z, z);
      }
      for (var k in GIAP[this.innerHTML]) {
        giapSel.options[giapSel.options.length] = new Option(k, k);
      }
    }
    /* Update preview for vkCB */    
    var previewCB = function() {
      let itemArr = vkCB[btns[i].innerHTML][this.value];
      let li = document.getElementById("card-vkcb").getElementsByTagName("li");
      for (let i = 0; i < itemArr.length; i++) {                                               // Run through the Array of item
        let span = document.getElementById("card-vkcb").getElementsByTagName("span");          // select the span that contains value of corresponding stat
        itemArr[i] === "" ? li[i].classList.add("invi") : li[i].classList.remove("invi");      // if stat === "" then hide it, else show it
        span[i].innerHTML = itemArr[i];
      }
      let labelCB = document.getElementById("labelCB");                                         // Call the container of Label
      this.value == "-" ? labelCB.classList.add("invi") : labelCB.classList.remove("invi");     // if select none, hide label else show label
      document.getElementById("item_CB").innerHTML = this.value;      
    }
    vkcbSel.onchange = previewCB;
    /* Update preview for vkCC */
    vkccSel.onchange = function() {
      let itemArr = vkCC[btns[i].innerHTML][this.value];
      let li = document.getElementById("card-vkcc").getElementsByTagName("li");
      for (let i = 0; i < itemArr.length; i++) {                                               // Run through the Array of item
        let span = document.getElementById("card-vkcc").getElementsByTagName("span");          // select the span that contains value of corresponding stat
        itemArr[i] === "" ? li[i].classList.add("invi") : li[i].classList.remove("invi");      // if stat === "" then hide it, else show it
        span[i].innerHTML = itemArr[i];
      }
      let labelCC = document.getElementById("labelCC");                                         // Call the container of Label
      this.value == "-" ? labelCC.classList.add("invi") : labelCC.classList.remove("invi");     // if select none, hide label else show label
      document.getElementById("item_CC").innerHTML = this.value;                                // show item name
    }
    /* Update preview for giap */
    giapSel.onchange = function() {
      let itemArr = GIAP[btns[i].innerHTML][this.value];
      let li = document.getElementById("card-giap").getElementsByTagName("li");
      for (let i = 0; i < itemArr.length; i++) {                                               // Run through the Array of item
        let span = document.getElementById("card-giap").getElementsByTagName("span");         // select the span that contains value of corresponding stat
        itemArr[i] === "" ? li[i].classList.add("invi") : li[i].classList.remove("invi");     // if stat === "" then hide it, else show it
        span[i].innerHTML = itemArr[i];
      }
      let labelGI = document.getElementById("labelGI");                                         // Call the container of Label
      this.value == "-" ? labelGI.classList.add("invi") : labelGI.classList.remove("invi");     // if select none, hide label else show label
      document.getElementById("item_GI").innerHTML = this.value;                                // show item name
    }    
    /* 3rd level cascading dropdown list
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = vkCB[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }*/
  }

}
/**/
/* Thêm Active class khi chọn Gear */

var header = document.getElementById("selGear");
var btns = header.getElementsByClassName("gearSel");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
}

/* Enchant level */
  //VKCB
let containerCB = document.getElementById("container-of-entCB");
let inputCB = containerCB.getElementsByTagName("input");
for (let i = 0; i < inputCB.length; i++) {
  inputCB[i].addEventListener("change", function() {
    let total = 0;
    for (let j = 0; j < inputCB.length; j++) {
      total += parseInt(inputCB[j].value, 10);
    }
    document.getElementById("labelCB").getElementsByTagName("span")[3].innerHTML = `(+${total})`;
  })
}
  //VKCC
let containerCC = document.getElementById("container-of-entCC");
let inputCC = containerCC.getElementsByTagName("input");
for (let i = 0; i < inputCC.length; i++) {
  inputCC[i].addEventListener("change", function() {
    let total = 0;
    for (let j = 0; j < inputCC.length; j++) {
      total += parseInt(inputCC[j].value, 10);
    }
    document.getElementById("labelCC").getElementsByTagName("span")[3].innerHTML = `(+${total})`;
  })
}
  //GIAP
  let containerGI = document.getElementById("container-of-entGI");
  let inputGI = containerGI.getElementsByTagName("input");
  for (let i = 0; i < inputGI.length; i++) {
    inputGI[i].addEventListener("change", function() {
      let total = 0;
      for (let j = 0; j < inputGI.length; j++) {
        total += parseInt(inputGI[j].value, 10);
      }
      document.getElementById("labelGI").getElementsByTagName("span")[3].innerHTML = `(+${total})`;
    })
  }

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
  select.selectedIndex = 0;	//select giữ nguyên option 1
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
