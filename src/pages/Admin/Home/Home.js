import "./home.css"
import authorImg from "../../../assets/images/author-img.jpg"

export const Home = () => {
  return (
    <div className="my-container">
      <div className="admin-home-wrap">
        <img className="admin-home-img" src={authorImg} alt="Nazim Buranov's img" />
        <h2 className="admin-home-username">Bo'ronov Nazim Mustafaqulovich </h2>
        <p className="admin-home-text">Jurnalist, bo'lajak filologiya fanlari doktori (PhD)</p>
      </div>
    </div>
  )
}
