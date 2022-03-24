/* IMPORT stat.js */
import {skillpoints, fuel, capacity, max340, btn_plus_minus, btn_plus_minus_aio, update_remain, baseGear, CPU, ENT} from './stat.js';
import {defense_array, shield_array, pierce_array} from './values.js';
import {damage_array, probability_array, evasion_array} from './values.js';

/* CARD CONTENT VALUES */

/* BASE STATS */  // AG
var base_atk = baseGear.A.atk;
var base_fuel = baseGear.A.fuel;
var base_def = baseGear.A.def;
var base_spirit = baseGear.A.spirit;
var base_eva = baseGear.A.eva;
var base_shield = baseGear.A.shield;

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
/* BASE STAT cho từng GEAR */
btns[3].addEventListener("click", function() {
  base_atk = document.getElementById("gear-atk").innerHTML = baseGear.A.atk;
  base_fuel = document.getElementById("gear-fuel").innerHTML = baseGear.A.fuel;
  base_def = document.getElementById("gear-def").innerHTML = baseGear.A.def;
  base_spirit = document.getElementById("gear-spirit").innerHTML = baseGear.A.spirit;
  base_eva = document.getElementById("gear-eva").innerHTML = baseGear.A.eva;
  base_shield = document.getElementById("gear-shield").innerHTML = baseGear.A.shield;
})
btns[2].addEventListener("click", function() {
  base_atk = document.getElementById("gear-atk").innerHTML = baseGear.B.atk;
  base_fuel = document.getElementById("gear-fuel").innerHTML = baseGear.B.fuel;
  base_def = document.getElementById("gear-def").innerHTML = baseGear.B.def;
  base_spirit = document.getElementById("gear-spirit").innerHTML = baseGear.B.spirit;
  base_eva = document.getElementById("gear-eva").innerHTML = baseGear.B.eva;
  base_shield = document.getElementById("gear-shield").innerHTML = baseGear.B.shield;
})
btns[1].addEventListener("click", function() {
  base_atk = document.getElementById("gear-atk").innerHTML = baseGear.M.atk;
  base_fuel = document.getElementById("gear-fuel").innerHTML = baseGear.M.fuel;
  base_def = document.getElementById("gear-def").innerHTML = baseGear.M.def;
  base_spirit = document.getElementById("gear-spirit").innerHTML = baseGear.M.spirit;
  base_eva = document.getElementById("gear-eva").innerHTML = baseGear.M.eva;
  base_shield = document.getElementById("gear-shield").innerHTML = baseGear.M.shield;
})
btns[0].addEventListener("click", function() {
  base_atk = document.getElementById("gear-atk").innerHTML = baseGear.I.atk;
  base_fuel = document.getElementById("gear-fuel").innerHTML = baseGear.I.fuel;
  base_def = document.getElementById("gear-def").innerHTML = baseGear.I.def;
  base_spirit = document.getElementById("gear-spirit").innerHTML = baseGear.I.spirit;
  base_eva = document.getElementById("gear-eva").innerHTML = baseGear.I.eva;
  base_shield = document.getElementById("gear-shield").innerHTML = baseGear.I.shield;
})


/* Cộng chỉ số khi chọn CPU */
var cpu_atk = 0;
var cpu_fuel = 0;
var cpu_def = 0;
var cpu_spirit = 0;
var cpu_eva = 0;
var cpu_shield = 0;
/*var ent_atk_value = document.getElementById("ent-atk").value;
var ent_fuel_value = document.getElementById("ent-fuel").value;
var ent_def_value = document.getElementById("ent-def").value;
var ent_spirit_value = document.getElementById("ent-spirit").value;
var ent_eva_value = document.getElementById("ent-eva").value;
var ent_shield_value = document.getElementById("ent-shield").value;*/

/* cpuSel */
document.getElementById("cpuSel").onchange = changeListener;
function changeListener() {
  var value = document.getElementById("cpuSel").value;
  switch (value) {
    case "Ad": 
       cpu_atk = CPU.Ad.atk;
       cpu_fuel = CPU.Ad.fuel;
       cpu_def = CPU.Ad.def;
       cpu_spirit = CPU.Ad.spirit;
       cpu_eva = CPU.Ad.eva;
       cpu_shield = CPU.Ad.shield;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = ENT.Ad.atk.toString();
      document.getElementById("ent-fuel").value = ENT.Ad.fuel.toString();
      document.getElementById("ent-def").value = ENT.Ad.def.toString();
      document.getElementById("ent-spirit").value = ENT.Ad.spirit.toString();
      document.getElementById("ent-eva").value = ENT.Ad.eva.toString();
      document.getElementById("ent-shield").value = ENT.Ad.shield.toString();

      break;
    case "Vi":
      cpu_atk = CPU.Vi.atk;
      cpu_fuel = CPU.Vi.fuel;
      cpu_def = CPU.Vi.def;
      cpu_spirit = CPU.Vi.spirit;
      cpu_eva = CPU.Vi.eva;
      cpu_shield = CPU.Vi.shield;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = ENT.Vi.atk.toString();
      document.getElementById("ent-fuel").value = ENT.Vi.fuel.toString();
      document.getElementById("ent-def").value = ENT.Vi.def.toString();
      document.getElementById("ent-spirit").value = ENT.Vi.spirit.toString();
      document.getElementById("ent-eva").value = ENT.Vi.eva.toString();
      document.getElementById("ent-shield").value = ENT.Vi.shield.toString();

      break;
    case "Fo":
      cpu_atk = CPU.Fo.atk;;
      cpu_fuel = CPU.Fo.fuel;
      cpu_def = CPU.Fo.def;
      cpu_spirit = CPU.Fo.spirit;
      cpu_eva = CPU.Fo.eva;
      cpu_shield = CPU.Fo.shield;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = ENT.Fo.atk.toString();
      document.getElementById("ent-fuel").value = ENT.Fo.fuel.toString();
      document.getElementById("ent-def").value = ENT.Fo.def.toString();
      document.getElementById("ent-spirit").value = ENT.Fo.spirit.toString();
      document.getElementById("ent-eva").value = ENT.Fo.eva.toString();
      document.getElementById("ent-shield").value = ENT.Fo.shield.toString();

      break;
    case "Mo":
      cpu_atk = CPU.Mo.atk;
      cpu_fuel = CPU.Mo.fuel;
      cpu_def = CPU.Mo.def;
      cpu_spirit = CPU.Mo.spirit;
      cpu_eva = CPU.Mo.eva;
      cpu_shield = CPU.Mo.shield;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = ENT.Mo.atk.toString();
      document.getElementById("ent-fuel").value = ENT.Mo.fuel.toString();
      document.getElementById("ent-def").value = ENT.Mo.def.toString();
      document.getElementById("ent-spirit").value = ENT.Mo.spirit.toString();
      document.getElementById("ent-eva").value = ENT.Mo.eva.toString();
      document.getElementById("ent-shield").value = ENT.Mo.shield.toString();

      break;
    case "Sc":
      CPU.Sc.atk;
      cpu_atk = CPU.Sc.atk;
      cpu_fuel = CPU.Sc.fuel;
      cpu_def = CPU.Sc.def;
      cpu_spirit = CPU.Sc.spirit;
      cpu_eva = CPU.Sc.eva;
      cpu_shield = CPU.Sc.shield;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = ENT.Sc.atk.toString();
      document.getElementById("ent-fuel").value = ENT.Sc.fuel.toString();
      document.getElementById("ent-def").value = ENT.Sc.def.toString();
      document.getElementById("ent-spirit").value = ENT.Sc.spirit.toString();
      document.getElementById("ent-eva").value = ENT.Sc.eva.toString();
      document.getElementById("ent-shield").value = ENT.Sc.shield.toString();

      break;
    case "nothing":
    default:
      cpu_atk = 0;
      cpu_fuel = 0;
      cpu_def = 0;
      cpu_spirit = 0;
      cpu_eva = 0;
      cpu_shield = 0;
      // Hàm cộng chỉ số CPU vào bảng stat
      /* Ent CPU = array ENT */
      document.getElementById("ent-atk").value = "0";
      document.getElementById("ent-fuel").value = "0";
      document.getElementById("ent-def").value = "0";
      document.getElementById("ent-spirit").value = "0";
      document.getElementById("ent-eva").value = "0";
      document.getElementById("ent-shield").value = "0";
      
      break;
  }
}

/* Khai biến Enchant CPU */
var ent_atk = parseInt(document.getElementById("ent-atk").value, 10);
var ent_fuel = parseInt(document.getElementById("ent-fuel").value, 10);
var ent_def = parseInt(document.getElementById("ent-def").value, 10);
var ent_spirit = parseInt(document.getElementById("ent-spirit").value, 10);
var ent_eva = parseInt(document.getElementById("ent-eva").value, 10);
var ent_shield = parseInt(document.getElementById("ent-shield").value, 10);

/* Đổi ent = cập nhật array ENT */
document.querySelectorAll('.ent').forEach(item => {
  item.addEventListener('change', event => {
    switch (document.getElementById("cpuSel").value) {
      case "Ad":
        ENT.Ad.atk = document.getElementById("ent-atk").value;
        ENT.Ad.fuel = document.getElementById("ent-fuel").value;
        ENT.Ad.def = document.getElementById("ent-def").value;
        ENT.Ad.spirit = document.getElementById("ent-spirit").value;
        ENT.Ad.eva = document.getElementById("ent-eva").value;
        ENT.Ad.shield = document.getElementById("ent-shield").value;
        break;                                    
      case "Vi":
        ENT.Vi.atk = document.getElementById("ent-atk").value;
        ENT.Vi.fuel = document.getElementById("ent-fuel").value;
        ENT.Vi.def = document.getElementById("ent-def").value;
        ENT.Vi.spirit = document.getElementById("ent-spirit").value;
        ENT.Vi.eva = document.getElementById("ent-eva").value;
        ENT.Vi.shield = document.getElementById("ent-shield").value;
        break;                                    
      case "Fo":
        ENT.Fo.atk = document.getElementById("ent-atk").value;
        ENT.Fo.fuel = document.getElementById("ent-fuel").value;
        ENT.Fo.def = document.getElementById("ent-def").value;
        ENT.Fo.spirit = document.getElementById("ent-spirit").value;
        ENT.Fo.eva = document.getElementById("ent-eva").value;
        ENT.Fo.shield = document.getElementById("ent-shield").value;
        break;                               
      case "Mo":
        ENT.Mo.atk = document.getElementById("ent-atk").value;
        ENT.Mo.fuel = document.getElementById("ent-fuel").value;
        ENT.Mo.def = document.getElementById("ent-def").value;
        ENT.Mo.spirit = document.getElementById("ent-spirit").value;
        ENT.Mo.eva = document.getElementById("ent-eva").value;
        ENT.Mo.shield = document.getElementById("ent-shield").value;
        break;                                    
      case "Sc":
        ENT.Sc.atk = document.getElementById("ent-atk").value;
        ENT.Sc.fuel = document.getElementById("ent-fuel").value;
        ENT.Sc.def = document.getElementById("ent-def").value;
        ENT.Sc.spirit = document.getElementById("ent-spirit").value;
        ENT.Sc.eva = document.getElementById("ent-eva").value;
        ENT.Sc.shield = document.getElementById("ent-shield").value;
        break;
      case "nothing": default:
        ENT.nothing.atk = 0;
        ENT.nothing.fuel = 0;
        ENT.nothing.def = 0;
        ENT.nothing.spirit = 0;
        ENT.nothing.eva = 0;
        ENT.nothing.shield = 0;
      break;
  }
  })
})


/* PLUS & MINUS __ ATK */
var amount_atk = document.getElementById("amount__atk");  // Lấy số lượng điểm
var Tan_cong = document.getElementById("atk");  // Lấy Tấn công
amount_atk.addEventListener("change", function() {
    Tan_cong.innerHTML = amount_atk.value * base_atk + base_atk + cpu_atk + ent_atk;  // tính Tấn công
    update_remain();  // Cập nhật điểm còn lại
    max340(Tan_cong);
    var card_atk = parseInt(Tan_cong.innerHTML, 10);  // lấy số dưới Tấn công
    document.getElementById("card_atk").innerHTML = (damage_array[card_atk] * 100).toFixed(4) + "%";  // update %dmg ở card-content
    document.getElementById("card_pierce").innerHTML = pierce_array[card_atk].toFixed(2) + "%";  // update %pierce ở card-content
    document.getElementById("card_prob").innerHTML = probability_array[card_atk].toFixed(2) + "%";  // update %prob ở card-content
    btn_plus_minus(amount_atk, "btn_minus_atk");  // Khóa và mở nút - khi nhập input
  })
 
btn_plus_minus_aio(amount_atk,"btn_plus_atk","btn_minus_atk");  // Nút + ATK và - ATK
/* PLUS & MINUS __ FUEL */
var amount_fuel = document.getElementById("amount__fuel");  // Lấy số lượng điểm
var Nhien_lieu = document.getElementById("fuel");  // Lấy Nhiên liệu
amount_fuel.addEventListener("change", function() {
  Nhien_lieu.innerHTML = amount_fuel.value * base_fuel + base_fuel + cpu_fuel + ent_fuel;  // tính Nhiên liệu
  update_remain();  // Cập nhật điểm còn lại
    max340(Nhien_lieu);
    var card_fuel = parseInt(Nhien_lieu.innerHTML, 10);  // lấy số dưới Nhiên liệu
    document.getElementById("card_fuel").innerHTML = fuel(card_fuel);  // update nhiên liệu ở card-content
    document.getElementById("card_weight").innerHTML = capacity(card_fuel);  // update tải trọng ở card-content
    btn_plus_minus(amount_fuel, "btn_minus_fuel");  // Khóa và mở nút - khi nhập input
  })
btn_plus_minus_aio(amount_fuel,"btn_plus_fuel","btn_minus_fuel");  // Nút + FUEL và - FUEL
/* PLUS & MINUS __ DEF */
var amount_def = document.getElementById("amount__def");  // Lấy số lượng điểm
var Phong_ngu = document.getElementById("def");  // Lấy Phòng ngự
amount_def.addEventListener("change", function() {
  Phong_ngu.innerHTML = amount_def.value * base_def + base_def + cpu_def + ent_def;  // tính Phòng ngự
  update_remain();  // Cập nhật điểm còn lại
    max340(Phong_ngu);
    var card_def = parseInt(Phong_ngu.innerHTML, 10);  // lấy số dưới Phòng ngự
    document.getElementById("card_def").innerHTML = defense_array[card_def].toFixed(2) + "%";  // update phòng ngự ở card-content
    btn_plus_minus(amount_def, "btn_minus_def");  // Khóa và mở nút - khi nhập input
  })
btn_plus_minus_aio(amount_def,"btn_plus_def","btn_minus_def");  // Nút + DEF và - DEF
/* PLUS & MINUS __ SPIRIT */
var amount_spirit = document.getElementById("amount__spirit");  // Lấy số lượng điểm
var Ky_nang = document.getElementById("spirit");  // Lấy Kỹ năng
amount_spirit.addEventListener("change", function() {
  Ky_nang.innerHTML = amount_spirit.value * base_spirit + base_spirit + cpu_spirit + ent_spirit;  // tính Kỹ năng
  update_remain();  // Cập nhật điểm còn lại
    max340(Ky_nang);
    var card_spirit = parseInt(Ky_nang.innerHTML, 10);  // lấy số dưới Kỹ năng
    document.getElementById("card_spirit").innerHTML = skillpoints(card_spirit);  // update kỹ năng ở card-content
    btn_plus_minus(amount_spirit, "btn_minus_spirit");  // Khóa và mở nút - khi nhập input
  })
btn_plus_minus_aio(amount_spirit,"btn_plus_spirit","btn_minus_spirit");  // Nút + SPIRIT và - SPIRIT
/* PLUS & MINUS __ EVA */
var amount_eva = document.getElementById("amount__eva");  // Lấy số lượng điểm
var Ne_tranh = document.getElementById("eva");  // Lấy Né tránh
amount_eva.addEventListener("change", function() {
  Ne_tranh.innerHTML = amount_eva.value * base_eva + base_eva + cpu_eva + ent_eva;  // tính Né tránh
  update_remain();  // Cập nhật điểm còn lại
    max340(Ne_tranh);
    var card_eva = parseInt(Ne_tranh.innerHTML, 10);  // lấy số dưới Né tránh
    document.getElementById("card_eva").innerHTML = evasion_array[card_eva].toFixed(2) + "%";  // update né tránh ở card-content
    btn_plus_minus(amount_eva, "btn_minus_eva");  // Khóa và mở nút - khi nhập input
  })
btn_plus_minus_aio(amount_eva,"btn_plus_eva","btn_minus_eva");  // Nút + EVA và - EVA
/* PLUS & MINUS __ SHIELD */
var amount_shield = document.getElementById("amount__shield");
var Giap = document.getElementById("shield");  // Lấy Giap
amount_shield.addEventListener("change", function() {
  Giap.innerHTML = amount_shield.value * base_shield + base_shield + cpu_shield + ent_shield;  // tính Giáp
  update_remain();  // Cập nhật điểm còn lại
    max340(Giap);
    var card_shield = parseInt(Giap.innerHTML, 10);  // lấy số dưới Giáp
    document.getElementById("card_shield").innerHTML = shield_array[card_shield];  // update giáp ở card-content
    btn_plus_minus(amount_shield, "btn_minus_shield");  // Khóa và mở nút - khi nhập input
  })
btn_plus_minus_aio(amount_shield,"btn_plus_shield","btn_minus_shield")  // Nút + SHIELD và - SHIELD


/* CẬP NHẬT CARD CONTENT KHI CLICK */
document.addEventListener("click", function() {
ent_atk = parseInt(document.getElementById("ent-atk").value, 10);
ent_fuel = parseInt(document.getElementById("ent-fuel").value, 10);
ent_def = parseInt(document.getElementById("ent-def").value, 10);
ent_spirit = parseInt(document.getElementById("ent-spirit").value, 10);
ent_eva = parseInt(document.getElementById("ent-eva").value, 10);
ent_shield = parseInt(document.getElementById("ent-shield").value, 10);
  Tan_cong.innerHTML = amount_atk.value * base_atk + base_atk + cpu_atk + ent_atk; max340(Tan_cong);       // Cập nhật điểm khi chọn CPU
  Nhien_lieu.innerHTML = amount_fuel.value * base_fuel + base_fuel + cpu_fuel + ent_fuel; max340(Nhien_lieu);
  Phong_ngu.innerHTML = amount_def.value * base_def + base_def + cpu_def + ent_def; max340(Phong_ngu);
  Ky_nang.innerHTML = amount_spirit.value * base_spirit + base_spirit + cpu_spirit + ent_spirit; max340(Ky_nang);
  Ne_tranh.innerHTML = amount_eva.value * base_eva + base_eva + cpu_eva + ent_eva; max340(Ne_tranh);
  Giap.innerHTML = amount_shield.value * base_shield + base_shield + cpu_shield + ent_shield; max340(Giap);
  var card_atk = parseInt(document.getElementById("atk").innerHTML, 10);                          // tổng Tấn công
  var card_fuel = parseInt(document.getElementById("fuel").innerHTML, 10);                        // tổng Nhiên liệu
  var card_def = parseInt(document.getElementById("def").innerHTML, 10);                          // tổng Phòng ngự
  var card_eva = parseInt(document.getElementById("eva").innerHTML, 10);                          // tổng Né tránh
  var card_shield = parseInt(document.getElementById("shield").innerHTML, 10);                    // tổng Giáp
  var card_spirit = parseInt(document.getElementById("spirit").innerHTML, 10);                    // tổng Kỹ năng
  document.getElementById("card_atk").innerHTML = (damage_array[card_atk] * 100).toFixed(4) + "%";        // update %dmg ở card-content
  document.getElementById("card_pierce").innerHTML = pierce_array[card_atk].toFixed(2) + "%";       // update %pierce ở card-content
  document.getElementById("card_prob").innerHTML = probability_array[card_atk].toFixed(2) + "%";                 // update %prob ở card-content
  document.getElementById("card_def").innerHTML = defense_array[card_def].toFixed(2) + "%";         // update %def ở card-content
  document.getElementById("card_eva").innerHTML = evasion_array[card_eva].toFixed(2) + "%";               // update %eva ở card-content
  document.getElementById("card_shield").innerHTML = shield_array[card_shield];                     // update %shield ở card-content
  document.getElementById("card_spirit").innerHTML = skillpoints(card_spirit);                      // update %spirit ở card-content
  document.getElementById("card_fuel").innerHTML = fuel(card_fuel);                                 // update %fuel ở card-content
  document.getElementById("card_weight").innerHTML = capacity(card_fuel);                           // update %weight ở card-content
  update_remain();  // Cập nhật điểm còn lại
  
  var enchant = ent_atk + ent_fuel + ent_def + ent_spirit + ent_eva + ent_shield;
  if (enchant > 5 ) {
    document.getElementById("warning").innerHTML = "Chú ý: Enchant CPU tối đa = 5"
  }
  else {
    document.getElementById("warning").innerHTML = ""
  }
})

/* DEMO *  



document.addEventListener("click", function() {
    var value = document.getElementById("cpuSel").value;
    switch (value) {
      case "Ad": 
         ENT.Ad.atk = ent_atk;
  }
})
document.getElementById("demo").innerHTML = ENT.Ad.atk;*/