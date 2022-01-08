import React, { Component } from "react";
import post from "../assets/segwarepost.png";
import avatar from "../assets/avatar.jpg";
class Post extends Component {
  render() {
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-profilepicture">
              <img src={avatar} alt="John D. Veloper" />
            </div>

            <div className="Post-user-nickname">
              <span>Gefferson Severo</span>
            </div>
          </div>
        </header>

        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src={post} />
          </div>
        </div>

        <div className="Post-caption">
          <strong>Gefferson Severo </strong> O verdadeiro software para
          monitoramento de alarmes.
        </div>
      </article>
    );
  }
}

export default Post;
