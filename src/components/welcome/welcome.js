import "./welcome.css";

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="welcome-image-container">
              <img
                src="https://images.unsplash.com/photo-1604137538367-3486afb2425f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="welcome-image"
                className="first-img"
              />
              <img
                src="https://images.unsplash.com/photo-1709811791595-9f05152c15e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="welcome-image"
                className="second-img"
              />
              <div className="welcome-client-records">
                <div className="client-number">15300+</div>
                <div className="client-title">Clients World Wide</div>
              </div>
              <div className="welcome-client-color-div">
                <div className="blue"></div>
                <div className="orange"></div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="welcome-details-container">
              <h1 className="welcome-title">
                TransMax Logistics Around <span>the World</span>
              </h1>
              <p>
                Transmax is the world's driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade Of
                merchandise through land transport.
              </p>
              <p>
                Our worth added administrations guarantee the progression of
                products proceeds consistently and supply chains stay lean and
                streamlined for progress.
              </p>
              <a href="#" className="btn welcome-btn gray-bg">
                Discover Move
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Welcome;
