/*
Configuration
------------------------
If something doesn't work please contact me on discord (Astronawta#0012).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "BN_Logo1.webp", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "BacoNetworks", /*Server name*/
        serverIp: "play.baconetworks.com", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "272038455683448834", /*Your server ID (if you want to add online user counter, you must have enabled Discord server widget)*/
        serverIpATM10: "atm10.baconetworks.com",
        serverIpATM10TTS: "atm10sky.baconetworks.com",
        serverIpSF4: "sf4.baconetworks.com",
        serverIpSB2: "sb2.baconetworks.com"
    }
}

/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

/*Config navbar*/
const serverName = document.querySelector(".server-name");
const serverLogo = document.querySelector(".logo-img");
/*Config header*/
const serverIp = document.querySelector(".minecraft-server-ip");
const serverLogoHeader = document.querySelector(".logo-img-header");
const discordOnlineUsers = document.querySelector(".discord-online-users");
const minecraftOnlinePlayers = document.querySelector(".minecraft-online-players");

/*IP copy only works if you have HTTPS on your website*/
const copyIpatm10tts = () => {
    const copyIpButton = document.querySelector(".copy-ip-atm10tts");
    const copyIpAlert = document.querySelector(".ip-copied-atm10tts");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIpATM10TTS);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const copyIpatm10 = () => {
    const copyIpButton = document.querySelector(".copy-ip-atm10");
    const copyIpAlert = document.querySelector(".ip-copied-atm10");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIpATM10);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const copyIpsf4 = () => {
    const copyIpButton = document.querySelector(".copy-ip-sf4");
    const copyIpAlert = document.querySelector(".ip-copied-sf4");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIpSF4);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const copyIpsb2 = () => {
    const copyIpButton = document.querySelector(".copy-ip-sb2");
    const copyIpAlert = document.querySelector(".ip-copied-sb2");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIpSB2);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const setDataFromConfigToHtml = async () => {
    /*Set config data to navbar*/
    serverName.innerHTML = config.serverInfo.serverName;
    serverLogo.src = `images/` + config.serverInfo.serverLogoImageFileName;

    /*Set config data to header*/
    /*serverIp.innerHTML = config.serverInfo.serverIp;*/

    let locationPathname = location.pathname;

    if(locationPathname == "/" || locationPathname.includes("index")) {
        copyIpatm10tts();
        copyIpatm10();
        copyIpsf4();
        copyIpsb2();
    } 
}

setDataFromConfigToHtml();