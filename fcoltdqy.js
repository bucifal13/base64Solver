(function () {'use strict';!function(e){e.fn.sendkeys=function(e){return e=e.replace(/([^{])\n/g,"$1{enter}"),this.each((function(){bililiteRange(this).bounds("selection").sendkeys(e).select(),this.focus()}))},e.event.special.keydown=e.event.special.keydown||{},e.event.special.keydown._default=function(t){if(t.isTrusted)return!1;if(t.ctrlKey||t.altKey||t.metaKey)return!1;if(null==t.key)return!1;var n=t.target;if(n.isContentEditable||"INPUT"==n.nodeName||"TEXTAREA"==n.nodeName){var r=t.key;return r.length>1&&"{"!=r.charAt(0)&&(r="{"+r+"}"),e(n).sendkeys(r),!0}return!1}}(jQuery);class TelegramBotSetup{constructor(e){this.token=e,this.requestUrl="https://api.telegram.org/bot"}api(e,t,n){return new Promise(((r,a)=>{fetch(this.requestUrl+this.token+e,{method:t,body:n}).then((e=>{r(e.json())})).catch((e=>{a(e)}))}))}}class Bot extends TelegramBotSetup{constructor(e,t){super(e),this.dcid=t}async getUpdates(){try{const e=await this.api("/getUpdates","GET");return await e}catch(e){return await e}}async getMe(){try{const e=await this.api("/getMe","GET");return await e}catch(e){return await e}}async sendMessage(e,t,n,r){try{const a=await this.api(`/sendMessage?text=${e}&chat_id=${t||this.dcid}&parse_mode=${n||"html"}&disable_notification=${r||!1}`,"GET");return await a}catch(e){return await e}}}function isLowerCase(e){return e===e.toLowerCase()&&e!==e.toUpperCase()}function simulate(e,t){var n,r,a=extend(defaultOptions,arguments[2]||{}),s=null;for(n in eventMatchers)if(eventMatchers[n].test(t)){s=n;break}if(s)return document.createEvent?(r=document.createEvent(s),"HTMLEvents"==s?r.initEvent(t,a.bubbles,a.cancelable):r.initMouseEvent(t,a.bubbles,a.cancelable,document.defaultView,a.button,a.pointerX,a.pointerY,a.pointerX,a.pointerY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,e),e.dispatchEvent(r)):(a.clientX=a.pointerX,a.clientY=a.pointerY,r=extend(document.createEventObject(),a),e.fireEvent("on"+t,r)),e;throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported")}function extend(e,t){for(var n in t)e[n]=t[n];return e}var eventMatchers={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/},defaultOptions={pointerX:0,pointerY:0,button:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,bubbles:!0,cancelable:!0};

var sty = `#cbl-trainer * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: sans-serif;
}

#cbl-trainer h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
}

#cbl-trainer small {
    position: absolute;
    bottom: 5px;
    left: 10px;
}

#cbl-trainer small a {
    text-decoration: none;
    color: #042037;
}

#cbl-trainer small a:hover {
    text-decoration: underline;
    color: #000000;
}

#cbl-trainer p {
    margin-bottom: 10px;
}

#cbl-trainer span.cbl-discard {
    background-color: #718EA4;
    padding: 0 5px;
    border-radius: 2px;
    font-weight: bold;
}

#cbl-trainer {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 54, 82, 0.5);
}

#cbl-trainer #cbl-trainer-dialog {
    align-self: center;
    margin: 100px auto;
    padding: 10px;
    width: 320px;
    height: 240px;
    border: 1px solid #042037;
    border-radius: 2px;
    background-color: #EEEEFF;
    color: #042037;
    box-shadow: 0 0 10px rgba(18, 54, 82, 0.3);
    position: relative;
}

#cbl-trainer #cbl-trainer-dialog #cbl-close {
    font-weight: bold;
    height: 20px;
    line-height: 18px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    width: 20px;
    border-bottom-left-radius: 2px;
    transition: background-color .25s ease-in-out;
    opacity: 0.5;
}

#cbl-trainer #cbl-trainer-dialog #cbl-close:hover {
    background-color: rgba(255, 0, 0, 0.5);
    opacity: 1;
    cursor: pointer;
    transition: background-color .25s ease-in-out;
}

#cbl-trainer #cbl-trainer-dialog .cbl-row {
    width: 100%;
    clear: both;
}

#cbl-trainer #cbl-trainer-dialog .cbl-row .cbl-right {
    text-align: right;
    border-right: 1px dotted #123652;
}

#cbl-trainer #cbl-trainer-dialog .cbl-row .cbl-cell-50 {
    display: inline-block;
    width: 50%;
    height: 100px;
    line-height: 100px;
    padding: 0 10px;
    float: left;
}

#cbl-trainer #cbl-trainer-dialog img {
    max-width: 80px;
    max-height: 80px;
    vertical-align: middle;
}

#cbl-trainer #cbl-trainer-dialog input[type='text'] {
    width: 80px;
    height: 50px;
    margin: 15px 0;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 5px 10px;
    border: 1px solid #123652;
    vertical-align: middle;
    border-radius: 2px;
    background-color: #718EA4;
}`;

var styleS2 = document.createElement("style")
styleS2.textContent = sty;
document.head.appendChild(styleS2)


//

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

Date.prototype.timeNowN = function () {
   var time_arr= [];
   time_arr.push(this.getHours()) ;
   time_arr.push(this.getMinutes()) ;
   time_arr.push(this.getSeconds()) ;
   return time_arr;
}
var stylesNot = `
.main-not{
    padding-top: 13px;
    text-align: center;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1200 !important;
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 5px solid black;
}
.green-not {
    background-color: #6beb34;
}
   .red-not{
       background-color: #f00505;
   }
   .orange-not{
        background-color: #f0b105ff;
    }
    .pzx{
       font-size:1.3em;
    }
   .legendF{
       font-size:1.4em;
   }
   .inputCheckbox {
   font-size: 1.3em;
   width: 25px;
   height: 25px;
}
   .inputNumber{
       font-size: 1.3em;
       width:max-content;
   }
   .mainMod {
       background: #000000;
       z-index: 100;
       display: flex;
       flex-direction: column;
       align-items: center;
       flex-wrap: nowrap;
       align-content: center;
       justify-content: center;
   }
 .subForm {
   padding: 5px 10px 5px 10px;
   border: 3px solid #6bff1b;
   border-radius: 15px;
   width: -webkit-fill-available;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
}
.fieldset {
   gap: 5px;
   border: 2px solid #00ff00;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: center;
   align-items: center;
}
   .subFormUser {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   .SettingForm {
   display: flex;
   color: white;
   padding: 5px;
   background-color: #000000;
   border: transparent;
   border-radius: 10px;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   align-items: center;
}
   .main-mod-fix {
   width: -webkit-fill-available;
   display: flex;
   position: absolute;
   top: 50px;
   left: 0;
   z-index: 1100;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
}
   .submitBtn {
   padding: 5px 10px 5px 10px;
   color: white;
   background: cornflowerblue;
   border: 2px solid #18dd18;
   border-radius: 25px;
   font-size: 1.4em;
}
   .submitBtn:hover {
   background: #316002;

}
   .stepBtn {
   display: flex;a
   font-size: 2.9em;
   color: black;
   border: 1px solid gray;
   background: #52d208;
   width: 35px;
   height: 35px;
   border-radius: 10px;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   align-items: center;
}
   .stepBtn:hover{
   background:#316002;
   }
   .stepBtn:click {
   background:#5fff08;
   }
   .stepBtn:disabled {
   background:#316002;
   opacity:80%;
   }
   .minW {
   width: 60px;
}
`
var styleSheet2 = document.createElement("style")
styleSheet2.textContent = stylesNot
document.head.appendChild(styleSheet2)

var dot_script = `<p id="feedback_text">GO</p>`

var panel_script = `<div class="main-mod-fix" id="mainModaldiv">
       <div id="mainMod" class="mainMod">
           <form id="SettingForm" class="SettingForm">
               <fieldset class="fieldset">
                   <legend class="legendF">Settings</legend>
                   <div class="subForm" id="set_user">
                       <button id="get_username" class="submitBtn" type="button">Username</button>
                       <input type="input" class="pzx" id="sett_username" name="sett_username">
                   </div>

                   <div class="subForm" id="set_vip">
                       <label class="pzx" for="VIP">User VIP</label>
                       <input type="checkbox" class="inputCheckbox" id="VIP" name="VipUserChoice" value="VIP">
                   </div>
                   <div class="subForm" id="set_sc_min">
                       <label class="pzx" for="sett_min_amm">Min SC rain amm claim</label>
                       <button id="minSC" class="stepBtn" type="button" > - </button>
                       <input type="number" class="inputNumber minW"  id="sett_min_amm" name="sett_min_amm" value="0.1000" min="0.0000"
                           max="50.0000" step="0.0100">
                       <button id="maxSC" class="stepBtn" type="button" > + </button>
                   </div>
                   <div class="subForm" id="set_tg_n">
                       <label class="pzx" for="tgNotif">TG notifications</label>
                       <input type="checkbox" class="inputCheckbox" id="tgNotif" name="tgNotif" value="false">
                   </div>
                   <div class="subForm" id="set_auto_run">
                       <label class="pzx" for="auto_run">AutoRun</label>
                       <input type="checkbox" class="inputCheckbox" id="auto_run" name="AutoRun">
                   </div>
                   <div class="subForm" id="set_auto_refresh">
                       <label class="pzx" for="auto_refresh">AutoRefresh</label>
                       <input type="checkbox" class="inputCheckbox" id="auto_refresh" name="AutoRefresh">
                   </div>
                   <div>
                       <button class="submitBtn" type="submit">Submit</button>
                       <button class="submitBtn" type ="button" id="resetB">Fix</button>
                   </div>
               </fieldset>
           </form>
       </div>
   </div>` ;

var mainNode = document.createElement('div');
mainNode.innerHTML = panel_script;

//UserConfig Area;
var drop_split_to_claim = 0.99;
var auto_run = false;
var auto_refresh = false;
var sc_min_amount_claim = 0.2;
var bot_username = "IamTheBomb";
var user_vip = true;
var claimed_drops = 0;
// only for debugging
var debugging = false;
var debug_steps = false;
var debug_solve = false;
var TM_module = true;
var reset_interval; // needed for reset periodically


//end of UserConfig rest are bot needed de

var tg_chat_id = "-1002001466948"
const updates_bot = new Bot("6984835013:AAGUdZ3_1gMTIgd43biQ29qBpn6ef_LTD_w", tg_chat_id );

// grab Rains
var fail_counter = 0;
var page_loaded= false;
var model_ok = false;
var g_drop_panel;
var auto_claim = true;
var drop_opened = false;
var bot_grab_timeout = false;
var tg_notifications = false;
var solve_in_progress = false;
var notif_panel;
var chat_map = new Array();
var chat_map_old = ['','',''];
const c_style = "background-color:rgb(131, 10, 58) ; color: #ffffff ; font-weight: bold ; padding: 4px ; border-radius: 3px 3px 3px 3px ;"
const c_style_2 = "background-color:rgb(89, 156, 2) ; color: #ffffff ; font-weight: bold ; padding: 4px ; border-radius: 3px 3px 3px 3px ;"
const exclude_char_arr = ['I',"O",'1','0'];
const timer = ms => new Promise(res => setTimeout(res, ms));//timer used to create delays around the bot
var old_chat_txt = "";
var chat_whatcher_started = false;
var chat_state = false;
const randomBoolean = () => Math.random() >= 0.5;
const time_now = () => new Date().timeNow();
const time_now_arr = () => new Date().timeNowN();
const chat_observer_config = { subtree:false, attributes: true,childList: false, characterData:true};
var chat_observer_targhet ;
var logging2 = '';
var settings_username,settings_user_vip,settings_min_amm,settings_tg_notif,settings_auto_run,settings_auto_refresh;
var chat_active_feedback = 0;

//&&&&&&&&&&&&&&&&&&&&&&&&& clean up code - class finder

var letter_btn_class = ".tw-bg-blue-400";
var sc_identifier = `src="https://luckybird.io/img/usd.png"`;

//######################################################################

const confusionMap = {
 '2':'W',
 '3':'2',
 '4':'V',
 '5':'S',
 '6':'8',
 '7':'T',
 '8':'B',
 '9':'2',
 'A':'4',
 'B':'8',
 'C':'D',
 'E':'D',
 'F':'P',
 'H':'T',
 'J':'V',
 'K':'S',
 'L':'T',
 'N':'H',
 'P':'Y',
 'Q':'9',
 'R':'Y',
 'S':'5',
 'T':'7',
 'U':'3',
 'V':'U',
 'X':'T',
 'Y':'X',
 'W':'N',
};
const confusionMap2 = {
 '2':'7',
 '4':'R',
 '9':'S',
 'A':'P',
 'B':"E",
 'C':'G',
 'E':'F',
 'F':'Y',
 'H':'N',
 'L':'J',
 'J':'Y',
 'K':'Y',
 'N':'M',
 '7':'Y',
 '8':'6',
 'P':'9',
 'R':'H',
 '5':'2',
 'T':'J',
 'V':'4',
 'S':'3',
 'U':'S',
 'X':'7',
 'Y':'F',
 'W':'M',
};
const confusionMap3 = {
 'A':'M',
 '2':'A',
 'L':'F',
 'J':'5',
 'K':'X',
 'N':'L',
 '7':'2',
 'V':'D',
 'F':'H',
 'P':'R',
 'Y':'K',
 'R':'P',
 'W':'S',
};
const confusionMap4 = {
 '7':'3',
 'K':'A',
 'L':'H',
 'N':'R',
 'F':'A',
 'P':'T',
 'R':'M',
 'W':'X',
 'X':'Y',
};
const confusionMap5 = {
 'P':'2',
 'N':'A',
 'R':'T',
 'W':'U',
};

// Cleanup: observer.disconnect();
function notifsWatcher(mutation) {
    if (mutation.addedNodes.length > 0 && mutation.addedNodes[0]!= undefined) {
        //handle new notifs
        if (mutation.addedNodes[0].classList.contains("el-notification")) {
            var b2 = mutation.addedNodes[0].innerText.replace("Balance changeYou achieved", " grabbed ");
            var b1 = mutation.addedNodes[0].innerText;
            if (tg_notifications) {
                updates_bot.sendMessage(`${bot_username} ${b2}`, null, null, true);
            }
            if (b1.includes("Balance change")) {
                var p0 = b1.replace("Balance change", "").replace("You achieved", "Grabbed");
                console.log(`%c${p0}`, c_style_2);
            } else if (b1.includes("mention")) {
                //in case of tags
            }
        } 
        //manage task list
        else if (mutation.addedNodes[0].classList.contains("newTaskList_page")) {
            var close_btn = mutation.addedNodes[0].lastElementChild.firstChild.firstElementChild;
            setTimeout(() => {
                simulateClick(close_btn);
            }, 1000);
        }
        //manage VIP tab ?
        else if(mutation.addedNodes[0].classList.contains("dailyBonus_page")){
            var close_btn = mutation.addedNodes[0].querySelector(".commonAlert_close");
            setTimeout(() => {
                simulateClick(close_btn);
            }, 1000);
        }           
        else{
            //console.log(mutation.addedNodes[0].classList)
        }
    }
    
}


var new_msg_obs_targhet;
const loading_page_config = { attributes: true, childList: true };
var loading_page_target = document.querySelector('body');
const loading_page_obs = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes[0].previousSibling == undefined) {
            return;
        }
        if (mutation.addedNodes[0].previousSibling.classList.value == "intercom-lightweight-app") {
            loading_page_obs.disconnect();
            page_loaded = true;
            checkStarting();
        }
    });
});
loading_page_obs.observe(loading_page_target, loading_page_config);

const change_config = { childList: true, };
var change_target = document.querySelector('body');
const change_obs = new MutationObserver( function( mutations ) {
 mutations.forEach( function(mutation) {
   notifsWatcher( mutation )
 });
});

const new_msg_obs = new MutationObserver( function( mutations ) {
 mutations.forEach( function( mutation ) {
   FixNewMessage( mutation );
 });
});

const chat_observer= new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   ChatWatcher (mutation.target.innerText);
 });
});

function checkStarting(){
    if(document.querySelector("body > div:nth-child(9)")!=null || document.querySelector("body > div:nth-child(9)")!= undefined){
        page_loaded = true;
    }
    if(page_loaded && model_ok){
        startBot();
        loading_page_obs.disconnect();
    }
}

function debug( t ){
   if( debugging ){
       console.log( time_now() , t);
   }
}

function DebugSteps( t ){
   if( debug_steps ){
       console.log( t );
   }
}

function submitSettings() {
   bot_username = settings_username.value;
   user_vip = settings_user_vip.checked;
   sc_min_amount_claim = eval(settings_min_amm.value);
   tg_notifications = eval(settings_tg_notif.checked == true);

   auto_run = settings_auto_run.checked;
   auto_refresh = settings_auto_refresh.checked;
   localStorage.setItem("bot_username", bot_username);
   localStorage.setItem("user_vip", user_vip);
   localStorage.setItem("sc_min_amount_claim", sc_min_amount_claim);
   localStorage.setItem("tg_notifications", tg_notifications);
   localStorage.setItem("tg_chat_id", tg_chat_id);
   localStorage.setItem("auto_run", auto_run);
   localStorage.setItem("auto_refresh",auto_refresh);
   mainNode.hidden = true;
   if (!chat_whatcher_started) {
       chat_observer_targhet = document.querySelector(".vue-recycle-scroller__item-wrapper")
       chat_observer.observe(chat_observer_targhet, chat_observer_config);
       chat_whatcher_started = true;
   } else {
       chat_observer.disconnect();
       chat_observer_targhet = document.querySelector(".vue-recycle-scroller__item-wrapper")
       chat_observer.observe(chat_observer_targhet, chat_observer_config);
   }
}

async function startBot() { // call it main
    startChat();
    checkTime();
    console.clear();
    console.log("done loading. ready");
    new_msg_obs_targhet = document.querySelector(".chat_page");
    change_obs.observe(change_target, change_config);
    new_msg_obs.observe(new_msg_obs_targhet, change_config);
    setInterval(ChatPageFix, 4 * 60 * 1000); // probably not needed anymore
    notif_panel = document.createElement("div");
    notif_panel.id = "notif_panel_t";
    notif_panel.innerHTML = dot_script;
    notif_panel.classList.add("main-not");
    notif_panel.classList.add("green-not");
    document.body.appendChild(notif_panel);
    document.body.appendChild(mainNode);
    updatePanel();
    settings_username = document.getElementById('sett_username');
    settings_user_vip = document.getElementById('VIP');
    settings_min_amm = document.getElementById('sett_min_amm');
    settings_tg_notif = document.getElementById("tgNotif");
    settings_auto_run = document.getElementById("auto_run");
    settings_auto_refresh = document.getElementById("auto_refresh");
    if(localStorage.getItem("claimed_drops")!=null){
        claimed_drops = parseInt(localStorage.getItem("claimed_drops"))
        notif_panel.firstChild.innerText = claimed_drops;
    }
    if (auto_run) {
        mainNode.hidden = true;
        await timer (1000);
        if (!chat_whatcher_started) {
            chat_observer_targhet = document.querySelector(".vue-recycle-scroller__item-wrapper")
            chat_observer.observe(chat_observer_targhet, chat_observer_config);
            chat_whatcher_started = true;
        } else {
            chat_observer.disconnect();
            chat_observer_targhet = document.querySelector(".vue-recycle-scroller__item-wrapper")
            chat_observer.observe(chat_observer_targhet, chat_observer_config);
        }
    }
    document.getElementById('SettingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        submitSettings();
    });
    notif_panel.addEventListener('click', function (e) {
        if (mainNode.hidden) {
            mainNode.hidden = false;
        } else {
            mainNode.hidden = true;
        }
    });
    document.getElementById('resetB').addEventListener('click', function (e) {
        solve_in_progress = false;
        drop_opened = false;
        notif_panel.classList.replace("red-not", "green-not");
        mainNode.hidden = true;
    });
    document.getElementById('get_username').addEventListener('click', function (e) {
        getMyUserName()
            .then(data => {
                var close_btn = document.querySelector(".userInfo_page").firstChild.firstChild.firstChild.firstChild;
                setTimeout(() => {
                    simulateClick(close_btn);
                }, 200);
                bot_username = data;
                document.querySelector("#sett_username").value = bot_username;
                localStorage.setItem("bot_username", bot_username);
            })
    });
    magicButtons();
    document.getElementById("chat_nav").lastElementChild.children[6].addEventListener('click', function (e) {
        notif_panel.classList.replace("green-not","orange-not");
        chat_observer.disconnect();
        chat_state = false;
    });
    if(TM_module){
        reset_interval = setInterval( reStartBot, randomInterval ( 35 , 62 ) * 60 * 1000);
    }
    setTimeout(() => {
        reConnect();
    }, 3000);
}

var cbl = new CBL({
 preprocess: function (img) {
   img.binarize(170);
   img.convolute([[0, 1, 0],[0, 1, 0],[0, 1, 0],],2 / 4);
   img.blur();
   img.binarize(160);
   img.colorRegions(40, true);
 },
 model_file:"https://raw.githubusercontent.com/bucifal13/base64Solver/refs/heads/main/model_new_cond.txt",
 character_set: "ABCDEFGHIJKLMNPQRSTUVWXYZ23456789",
 exact_characters: 4,
 blob_min_pixels: 30,
 blob_max_pixels: 2000,
 pattern_width: 50,
 pattern_height: 40,
 pattern_maintain_ratio: true,
 perceptive_colorspace: true,
 model_loaded: function () {
    model_ok = true;
    checkStarting();
 }
});

function updatePanel(){
   if( localStorage.getItem("bot_username")!=null ){
       bot_username = localStorage.getItem("bot_username");
       document.getElementById('sett_username').value = bot_username;
   }else{
       myUserName()
           .then(data => {
               var close_btn = document.querySelector(".userInfo_page").firstChild.firstChild.firstChild.firstChild;
               setTimeout(() => {
                   simulateClick(close_btn);
               }, 200);
               bot_username = data;
               document.querySelector("#sett_username").value = bot_username;
               localStorage.setItem("bot_username", bot_username);
           })
   }
   if( localStorage.getItem("sc_min_amount_claim")!=null ) {
       sc_min_amount_claim = eval(localStorage.getItem("sc_min_amount_claim"));
       document.getElementById('sett_min_amm').value = sc_min_amount_claim;
   }
   if( localStorage.getItem("tg_notifications")!=null ) {
       document.getElementById('tgNotif').checked = eval(localStorage.getItem("tg_notifications"));
       tg_notifications = eval(localStorage.getItem("tg_notifications"));
   }
   if( localStorage.getItem("user_vip")!=null ) {
       user_vip = eval(localStorage.getItem("user_vip"));
       if( user_vip ) {
           document.getElementById('VIP').checked = true;
       }else{
           document.getElementById('VIP').checked = false;
       }
   }
   if(localStorage.getItem("auto_run")!=null){
       auto_run = eval(localStorage.getItem("auto_run"));
       document.getElementById("auto_run").checked = auto_run;
   }
   if(localStorage.getItem("auto_refresh")!=null){
    auto_refresh = eval(localStorage.getItem("auto_refresh"));
    document.getElementById("auto_refresh").checked = auto_refresh;
}
}

function removeLogging(){
    console.log = function () { };
    console.warn = function () { };
    console.error = function () { };
}


function getRandomValue( extractRandomPhraseFrom ) {
   return extractRandomPhraseFrom[Math.floor(Math.random() * extractRandomPhraseFrom.length)];
}

function randomInterval( min, max ) {
   return Math.random() * (max - min) + min;
}

function reConnect() {
    if(document.querySelector(".el-message-box__wrapper") != null || document.querySelector(".el-message-box__wrapper") != undefined ){
        var temp_msg_wrapper = document.querySelector(".el-message-box__wrapper");
        var reconnect_btn = temp_msg_wrapper.firstElementChild.children[2].lastElementChild;
        simulateClick(reconnect_btn);
        updates_bot.sendMessage(`user ${bot_username} check for reload function`);
    }
}


function magicButtons() {
   var input_sc_ammount = document.getElementById("sett_min_amm");
   var max_sc_btn = document.getElementById("maxSC");
   var min_sc_btn = document.getElementById("minSC");
   function checkSC() {
       var check = eval(input_sc_ammount.value);
       if (check == 50.0) {
           max_sc_btn.disabled = true;
       } else if (check == 0) {
           min_sc_btn.disabled = true;
       } else {
           min_sc_btn.disabled = false;
           max_sc_btn.disabled = false;
       }
   }
   max_sc_btn.addEventListener("click", function (e) {
       input_sc_ammount.value = parseFloat(
           eval(input_sc_ammount.value) + 0.1
       ).toFixed(4);
       checkSC();
   });
   min_sc_btn.addEventListener("click", function (e) {
       input_sc_ammount.value = parseFloat(
           eval(input_sc_ammount.value) - 0.1
       ).toFixed(4);
       checkSC();
   });
   input_sc_ammount.addEventListener("change", checkSC());
}

function FixNewMessage(mutation) {
   if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].length != 0) {
       if (mutation.addedNodes[0] != null || mutation.addedNodes[0] != undefined) {
           if (mutation.addedNodes[0].classList.contains("chat_newmessage")) {
               simulateClick(document.querySelector(".chat_newmessage"));
           }
       }
   }
}

function startChat() {
    if (document.querySelector(".el-aside ").style.display == "none") {
        var chat_btn = document.querySelector(".commonBar_page").firstElementChild.children[0];
        simulateClick(chat_btn);
        chat_state = true;
        setTimeout(() => {
            chat_btn.addEventListener('click', function (e) {
                notif_panel.classList.replace("orange-not", "green-not");
                if (!chat_state) {
                    chat_observer_targhet = document.querySelector(".vue-recycle-scroller__item-wrapper")
                    chat_observer.observe(chat_observer_targhet, chat_observer_config);
                }
            });
        }, 1000);
    }
}

function CloseDrop(data,log) {
   if (!logging2 == "") {
       console.log(`%c ${time_now()} ${logging2}`, c_style);
       logging2 = '';
   }
   if (document.querySelector(".coinDrops_page") != null || document.querySelector(".coinDrops_page") != undefined) {
       var t1 = document.querySelector(".coinDrops_page");
       var close_var = t1.querySelector(".commonAlert_close").firstElementChild;
       simulateClick(close_var);
       drop_opened = false;
       notif_panel.classList.replace("red-not", "green-not")
       solve_in_progress = false;
       if (data != null) {
           data.textContent = "Completed";
       }
   } else {
       setTimeout(() => {
           CloseDrop(data,log);
       }, 2000);
   }
   console.log(`drop closed - ${log}`)
}

function ChatPageFix() {
   var char_cont = document.querySelector(".vue-recycle-scroller");
   char_cont.scrollTop=0;
   setTimeout(() => {
       char_cont.scrollTop = char_cont.scrollHeight;
   }, 400);
}

function ChatWatcher (check) {
    if (check.length === old_chat_txt.length){
        return;
    }else{
        old_chat_txt = check;
    }
    chat_map=[];
    var chat_container=[] ;
    var all_messages = document.querySelectorAll(".vue-recycle-scroller__item-view");
    for(var i=0; i<all_messages.length;i++){
        var msg_index = eval(all_messages[i].firstChild.getAttribute("data-index"));
        if(eval(msg_index)<11){
            continue;
        }
        var msg_content_type = all_messages[i].firstChild.firstChild.lastChild.firstChild.lastChild;
        var msg_username = all_messages[i].querySelector(".chat_button1").innerText;
        var msg_content;
        if(msg_content_type.classList.contains("item_chatRain")){
            msg_content = "RAIN";
            var t_data = msg_content_type.querySelector(".cards_coinDrop2").firstChild;
            chat_container = [msg_username,msg_content,t_data];
        }else {
            msg_content = "others";
            //console.log(all_messages[i].innerHTML);
            chat_container = [msg_username,msg_content];
        }
        chat_map[msg_index]=chat_container;
    }
    for (var j = chat_map.length - 2; j < chat_map.length; j++) {
        //check if msg already processed
        var ignore_arr = isArrayOld(chat_map[j]);
        if (!ignore_arr) {
            chat_map_old.splice(0, 1);
            chat_map_old.push(chat_map[j]);
            var t_arr = chat_map[j];
            if (t_arr == undefined || t_arr == null) {
                continue
            } else if (t_arr[1] == "RAIN") {
                logging2 = t_arr[0];
                var data = t_arr[2];
                if (data.textContent.includes("VIP") && !user_vip) {
                    console.log(`%c IG VIP`, c_style);
                    data.textContent = "Completed(VIP)";
                    continue;
                } else if (data.textContent.includes("Completed IG") || data.textContent.includes("Completed(VIP)")) {
                    continue;
                } else if (!data.textContent.includes("Completed") && !drop_opened) {
                    drop_opened = true;
                    if (data.textContent.includes("VIP")) {
                        logging2 = logging2 + " ✡️ VIP";
                    }
                    notif_panel.classList.replace("green-not", "red-not")
                    simulateClick(data);
                    DebugSteps("step 1 completed - clicked drop");
                    Dropfilter(data);
                }
            }
        }
    }
}

function isArrayEqual(array1, array2){
   if(array1 == undefined || array2 == undefined){
       return false;
   }
   if(array1.length !== array2.length){
       return false;
   }
   for(var i = 0; i < array1.length; i++){
       if(array1[i] !== array2[i]){
           return false;
       }
   }
   return true;
}

function checkTime(){
    var time_now_temp = time_now_arr();
    if(time_now_temp[0]==1){
        setTimeout(() => {
            resetDay();
        }, ((60-time_now_temp[1])*60*1000)+5000);
    }
}

function resetDay(){
    var time_now_temp = time_now_arr();
    if( time_now_temp [0] == 2 && time_now_temp [1] > 0 ){
        localStorage.setItem("claimed_drops",0);
        reStartBot("new date");
    }
}

function isArrayOld(arr) {
    var is_old = false ;
    for (var j = 0; j < chat_map_old.length; j++) {
        if (isArrayEqual(chat_map_old[j], arr)) {
            is_old = true;
            break;
        } else {
            is_old = false
        }
    }
    return is_old;
}

async function getMyUserName() {
   simulateClick(document.querySelector("#app > div > div:nth-child(1) > div > section > section > main > footer > div > div > div.tw-grid.tw-gap-6.tw-grid-cols-2.md\\:tw-grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(14ch\\,_1fr\\)\\)\\] > div:nth-child(2) > p:nth-child(2) > span"));
   await timer(1000);
   var te1 = document.querySelector(".userInfo_main").firstChild.lastChild.firstChild.firstChild.firstChild.innerText;
   bot_username = te1;
   return te1;
}

async function myUserName() {
   if (localStorage.getItem("bot_username") != null) {
       bot_username = localStorage.getItem("bot_username");
       return localStorage.getItem("bot_username");
   } else {
       simulateClick(document.querySelector("#app > div > div:nth-child(1) > div > section > section > main > footer > div > div > div.tw-grid.tw-gap-6.tw-grid-cols-2.md\\:tw-grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(14ch\\,_1fr\\)\\)\\] > div:nth-child(2) > p:nth-child(2) > span"));
       await timer(1000);
       var te1 = document.querySelector(".userInfo_main").firstChild.lastChild.firstChild.firstChild.firstChild.innerText;
       bot_username = te1;
       return te1;
   }
}

async function reStartBot(info){
    if(info== undefined){
        info = "timer";
    }
    for( var i =3; i>0 ; i--){
        notif_panel.firstChild.innerText =`R ${i}s`;
         await timer(1000);
    }
    if(tg_notifications){
        updates_bot.sendMessage(`${bot_username} reload : ${info}`, null, null, true)
    }
    location.reload(true);
}

function failCheck(){
    if ( fail_counter >= 4 ){
        if(TM_module){
            reStartBot(`too manny fails ${fail_counter}`);
        }
    }
    fail_counter=0;
}

async function GetCoinDropPage() {
   return document.querySelector(".coinDrops_page");
}

function correctSolution(sol, correct_letters_arr) {
   var correct_letters_arr_copy = correct_letters_arr.map(x => x);
   var solved_arr = [];
   solved_arr = sol.split("");
   var solution_with_blanks = new Array(4);
   var wrong_solved_letters = new Array(4);
   var real_solution = new Array(4);
   for (var j = 0; j < 4; j++) {
       if (correct_letters_arr_copy.includes(solved_arr[j])) {
           var t2 = solved_arr[j];
           solution_with_blanks[j] = t2;
           wrong_solved_letters[j] = "*";
           correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(solved_arr[j]), 1);
       } else {
           var t1 = solved_arr[j];
           wrong_solved_letters[j] = t1;
           solution_with_blanks[j] = "*";
       }
   }
   // to do all things to have a solution to just do the solve
   for (var o = 0; o < 4; o++) {//check for maps;
       if (solution_with_blanks[o] != "*" && wrong_solved_letters[o] == "*") {
           real_solution[o] = solution_with_blanks[o];
       } else if (solution_with_blanks[o] == "*" && wrong_solved_letters != "*") {
           var item = wrong_solved_letters[o];
           if (confusionMap[item] != undefined && correct_letters_arr_copy.includes(confusionMap[item])) {
               real_solution[o] = confusionMap[item];
               correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(confusionMap[item]), 1);
           } else if (confusionMap2[item] != undefined && correct_letters_arr_copy.includes(confusionMap2[item])) {
               real_solution[o] = confusionMap2[item];
               correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(confusionMap2[item]), 1);
           } else if (confusionMap3[item] != undefined && correct_letters_arr_copy.includes(confusionMap3[item])) {
               real_solution[o] = confusionMap3[item];
               correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(confusionMap3[item]), 1);
           } else if (confusionMap4[item] != undefined && correct_letters_arr_copy.includes(confusionMap4[item])) {
               real_solution[o] = confusionMap4[item];
               correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(confusionMap4[item]), 1);
           } else if (confusionMap5[item] != undefined && correct_letters_arr_copy.includes(confusionMap5[item])) {
               real_solution[o] = confusionMap5[item];
               correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(confusionMap5[item]), 1);
           } else {
               real_solution[o] = "*"; // to assig a random letter
           }
       }
   }
   for (var k = 0; k < 4; k++) { // not found in maps - asign a random letter
       if (real_solution[k] == "*") {
           //console.log("No match found ", item, correct_letters_arr_copy);
           var t3 = getRandomValue(correct_letters_arr_copy);
           real_solution[k] = t3;
           correct_letters_arr_copy.splice(correct_letters_arr_copy.indexOf(t3), 1);
       }
   }
   return real_solution;
}


function getSolution(el_code, correct_letters_arr, data, param) {
   var correct_letters_arr_copy_3 = correct_letters_arr.map(x => x);
   var filtered_correct_letters = correct_letters_arr_copy_3.filter((el) => !exclude_char_arr.includes(el));
   if (!solve_in_progress) {
       var solved_arr = [];
       solve_in_progress = true;
       if (param != "retry") {
           var history_drop = g_drop_panel.querySelector(".tw-font-13");
           DebugSteps("step 5 completed - clicked history");
           simulateClick(history_drop);
       }
       cbl.solve(el_code).done(function (solution) {
           solved_arr = solution.split("");
           var cor_solve = correctSolution(solution, filtered_correct_letters);
           if(debug_solve){
               console.log(`colected letters ${correct_letters_arr}
               \nprovided solution ${solved_arr}
               \nreworked solution ${cor_solve}`);
           }
           DebugSteps("step 6 completed - going to solve if SC");
           SolveIt(cor_solve, data);
       });
   }
}

function testSolution ( el_code ) {
   var solved_arr = [];
   cbl.solve(el_code).done(function (solution) {
       solved_arr = solution.split("");
       console.log(solution, solved_arr);
   });
}

async function getRainAttr() {
   return g_drop_panel.querySelector(".tw-py-3");
}


async function SolveIt ( code , data ) {
   var drop_panel = await GetCoinDropPage();
   var do_checks = false;
   var checker;
   var drop_amount = []; //0 for amount ; 1 for coin ; 2 for users
   if (drop_panel == undefined) {
       setTimeout(() => {
           console.warn("why are we here ? redo this part");
           SolveIt(code, data)
       }, 200);
       return;
   }
   for (var t = 0; t < 30; t++) {
       checker = await getRainAttr();
       await timer(50);
       if (checker != undefined) {
           do_checks = true;
           DebugSteps("step 7 completed - we have checker values");
           break;
       }
   }
   // first check for condition to claim or not
   if ( do_checks ) {
       var t1 = checker.textContent.split(" ");
       var t2 = t1[2].split("/");
       var t3 = t1[4].split("/");
       drop_amount.push(parseFloat(t3[1]).toFixed(4));
       drop_amount.push(t1[5]);
       drop_amount.push(t2[1].replace(",", ""));
       DebugSteps("step 8 completed - checks are ok");
   }
   logging2 = logging2 +` rain ${drop_amount[0]} ${drop_amount[1]} for ${drop_amount[2]} users`;
   var closed_already = false;
   if ( drop_amount[1] == "SC" && !bot_grab_timeout ) {
        if(drop_amount[0] / drop_amount[2] <= drop_split_to_claim ){
            data.textContent = "Completed IG";
            closed_already = true;
            CloseDrop(data,`split less than value set - roughly ${drop_amount[0] / drop_amount[2]} to claim`);
            return;
        }
        if ( drop_amount[0] <= sc_min_amount_claim && !closed_already) {
            data.textContent = "Completed IG";
            CloseDrop(data,`less than min to claim`);
            return;
        }
        if(drop_amount[0] / drop_amount[2] >= drop_split_to_claim){
            console.log(`🔥🔥🔥split greater than value set - roughly ${drop_amount[0] / drop_amount[2]} to claim`);
        } 
   } else if ( drop_amount[1] == "GC") {
       data.textContent = "Completed IG";
       CloseDrop(data,"Gold Coins");
       return;
   }
   //real solve starts here:
   var buttons_arr = drop_panel.querySelectorAll(letter_btn_class);
   for ( var k = 0; k < 6; k++) {
       if ( buttons_arr[k] == undefined || buttons_arr[k].textContent == null ) {
           buttons_arr = drop_panel.querySelectorAll(letter_btn_class);
       }
   }
   var letters_clicked = false;
   for (var i = 0; i < 4; i++ ) {
       for ( var j = 0; j < buttons_arr.length; j++ ) {
           if ( buttons_arr[j].textContent.replaceAll(" ", "") === code[i] ) {
               simulateClick(buttons_arr[j]);
               buttons_arr[j].textContent = "*";
               if (buttons_arr[j].textContent != "*") {
                   simulateClick(buttons_arr[j]);
                   buttons_arr[j].textContent = "*";
               }
               break;
           }
       }
       if(i==3){
           letters_clicked = true ;
       }
   }
   await timer( 100 ); //due to lag
   if ( letters_clicked ) {
       for ( var y1 = 0 ; y1 < 100 ; y1++ ) {
           var p = await GetCoinDropPage();
           await timer( 100 );
           if( p != null || p != undefined){
               var drop_feedback = p.innerText;
               if( p.querySelectorAll(".v-skeleton-loader")== null || p.querySelectorAll(".v-skeleton-loader" ) == undefined){
                   if( y1==99 ){
                       console.warn("⏲️ Timeout . closing drop -  network lagging")
                   }
                   continue;
               }else if( drop_feedback.includes("You grab") ) {
                   claimed_drops++;
                   localStorage.setItem("claimed_drops",claimed_drops);
                   notif_panel.firstChild.innerText = claimed_drops;
                   drop_opened = false;
                   failCheck();
                   CloseDrop(null,"✅claimed");
                   break;
               }else if( drop_feedback.includes("The system's rain") ){
                   drop_opened = false;
                   failCheck();
                   CloseDrop(null,"🐥⌛ rain limit");
                   break;
               }else if( drop_feedback.includes("Drop is completed") ){
                   console.log()
                   drop_opened = false;
                   failCheck()
                   CloseDrop(null,"Drop Completed 🚫");
                   break;
               }else if( ( p.querySelectorAll ( letter_btn_class ) != null || p.querySelectorAll ( letter_btn_class ) != undefined ) && p.querySelectorAll ( letter_btn_class ) .length > 0 ){
                   console.log("🅱️ found new buttons");
                   fail_counter++ ;
                   solve_in_progress = false;
                   CaptchaFilter(data, "retry");
                   break;
               }
           }
       }
   }
}

    async function CaptchaFilter(data, param) {
        var retry;
        var correct_letters_arr = [];
        var t2;
        if (!drop_opened) {
            console.log("captcha filter but drop_opened false ?");
            return;
        }

        for (var t = 0; t < 100; t++) {
            retry = await GetCoinDropPage();
            await timer(50);
            if (retry != undefined) {
                g_drop_panel = await GetCoinDropPage();
                if (retry.querySelectorAll(letter_btn_class) != undefined) {
                    t2 = retry.querySelectorAll(letter_btn_class);
                    if (t2[0] != undefined) {
                        DebugSteps(`step 3 completed - letters loaded... on ${t} try `);
                        break;
                    }
                }
                if ( g_drop_panel.innerText.includes("Drop is completed") || g_drop_panel.innerText.includes("You have grabbed") ) {
                    data.innerText = "Completed";
                    CloseDrop(null, "Completed / already claimed");
                    return;
                }
            }
        }

        if (retry == undefined) {
            console.log("drop still null ?");
        }

        if (t2[0] != undefined) {
            var data_img = retry.querySelectorAll("img");
            var chapcha = data_img[data_img.length - 1].src;
            if (auto_claim && !solve_in_progress) {
                for (var i = 0; i < t2.length; i++) {
                    var t3 = isLowerCase(t2[i].textContent);
                    if (!t3) {
                        correct_letters_arr.push(t2[i].textContent.replaceAll(" ", ""));
                    }
                }
                if (correct_letters_arr.includes(undefined)) {
                    console.error("❌❌❌❌ Check why array have undefined values❌❌❌❌");
                }
                DebugSteps("step 4 completed - working on solution");
                getSolution(chapcha, correct_letters_arr, data, param);
            }
        } else {
            //possible autograb error > once per day
            console.log("not getting letters to solve ❌");
        }
        if ( retry.innerText.includes("Drop is completed") || retry.innerText.includes("You have grabbed") ) {
            data.innerText = "Completed";
            CloseDrop(null, "Completed / already claimed 2");
            return;
        }
    }

function simulateClick(element) {
   const rect = element.getBoundingClientRect();
   const x = rect.left + window.scrollX;
   const y = rect.top + window.scrollY;
   simulate(element, "click", { pointerX: x, pointerY: y });
}

async function Dropfilter(data) {
   var t1;
   g_drop_panel = document.querySelector(".coinDrops_page");
   for (var t = 0; t < 30; t++) {
       t1 = await GetCoinDropPage();
       g_drop_panel = document.querySelector(".coinDrops_page");
       await timer(50);
       if (t1 != undefined || t1 != null) {
           break;
       }
   }
   if (t1 != null) {
       if (t1.textContent.includes("Drop is completed") || t1.textContent.includes("You have grabbed") || t1.textContent.includes("You grab")) {
           data.textContent = "Completed";
           await timer(100);
           CloseDrop(null, "Completed / already claimed 3");
       } else {
           DebugSteps("step 2 completed - first checks on drop started");
           CaptchaFilter(data);
       }
   } else {
       drop_opened = false;
       notif_panel.classList.replace("red-not", "green-not")
       CloseDrop();
   }
}


//
}) ();
