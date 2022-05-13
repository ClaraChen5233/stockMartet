import loadingImg from "../Assets/loading.png";
export default function Loading() {
  return (
    <div className="container d-flex align-items-center justify-content-center loading-page">
      <div>
        <img src={loadingImg} alt="loading img" style={{ width: 250 }} />
        <h2 className="text-center">Is loading....</h2>
      </div>
    </div>
  );
}
