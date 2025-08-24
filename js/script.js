/*
Configuration
------------------------
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "BN_Logo1.webp",
        serverName: "BacoNetworks",
        serverIp: "play.baconetworks.com",
        serverIpATM10: "atm10.baconetworks.com",
        serverIpATM10TTS: "atm10sky.baconetworks.com",
        serverIpSF4: "sf4.baconetworks.com",
        serverIpSB2: "sb2.baconetworks.com",
        discordServerID: "272038455683448834"
    }
}

/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

const discordOnlineUsers = document.querySelector(".discord-online-users");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

const getDiscordOnlineUsers = async () => {
    try {
        const discordServerId = config.serverInfo.discordServerID;

        const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
        let response = await fetch(apiWidgetUrl);
        let data = await response.json();

        if(!data.presence_count) return "...";
        else return (await data.presence_count);
    } catch (e) {
        return "...";
    }
}

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
    let locationPathname = location.pathname;

    if(locationPathname == "/" || locationPathname.includes("index")) {
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();

        copyIpatm10tts();
        copyIpatm10();
        copyIpsf4();
        copyIpsb2();
    } 
}

setDataFromConfigToHtml();