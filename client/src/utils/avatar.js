import userIcon from "../assets/icons/user.png";
// AVATAR ICONS
import bowie from "../assets/avatars/bowie.png";
import cassette from "../assets/avatars/cassette.png";
import elvis from "../assets/avatars/elvis.png";
import equalizer from "../assets/avatars/equalizer.png";
import pick from "../assets/avatars/guitar-pick.png";
import pedal from "../assets/avatars/guitar-pedal.png";
import headphones from "../assets/avatars/headphones.png";
import hendrix from "../assets/avatars/hendrix.png";
import lennon from "../assets/avatars/lennon.png";
import quaver from "../assets/avatars/quaver.png";
import rose from "../assets/avatars/rose.png";
import simmons from "../assets/avatars/simmons.png";
import star from "../assets/avatars/star.png";
import ticket from "../assets/avatars/ticket.png";
import mirrorball from "../assets/avatars/mirror-ball.png";

class Avatar {
  saveAvatar(avatar) {
    localStorage.setItem("avatar", avatar);
    window.location.assign("/");
  }

  getAvatar() {
    return localStorage.getItem("avatar");
  }

  handleAvatar() {
    const avatar = localStorage.getItem("avatar");
    if (avatar === "bowie") {
      return bowie;
    } else if (avatar === "cassette") {
      return cassette;
    } else if (avatar === "elvis") {
      return elvis;
    } else if (avatar === "equalizer") {
      return equalizer;
    } else if (avatar === "guitar-pick") {
      return pick;
    } else if (avatar === "guitar-pedal") {
      return pedal;
    } else if (avatar === "headphones") {
      return headphones;
    } else if (avatar === "hendrix") {
      return hendrix;
    } else if (avatar === "lennon") {
      return lennon;
    } else if (avatar === "quaver") {
      return quaver;
    } else if (avatar === "rose") {
      return rose;
    } else if (avatar === "simmons") {
      return simmons;
    } else if (avatar === "star") {
      return star;
    } else if (avatar === "ticket") {
      return ticket;
    } else if (avatar === "mirror-ball") {
      return mirrorball;
    } else {
      return userIcon;
    }
  };

}

export default new Avatar();
