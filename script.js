const pages = {
  home: `
  <section id="home-section">
    <div class="container">
      <!-- Hero Section -->
      <div class="row align-items-center mb-5">
        <div class="col-md-6 text-center text-md-start">
          <h1 class="hero-title">Welcome to Zestify</h1>
          <p class="lead">Fresh, healthy, and handpicked fruits delivered straight from the farm to your doorstep. Experience the joy of a healthy lifestyle!</p>
          <button class="btn btn-success mt-3" onclick="loadPage('products')">Shop Now</button>
        </div>
        <div class="col-md-6 text-center">
          <img src="images/fruits.jpg" alt="Fresh Fruits" class="img-fluid hero-image">
        </div>
      </div>
  </section>
`,
  about: `
      <section id="about">
        <div class="container text-center">
          <h2>About Us</h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <div class="card">
                <img src="./images/grapes in basket.jpg" class="card-img-top" alt="Fresh Fruits">
                <div class="card-body">
                  <h5 class="card-title">Freshness Guaranteed</h5>
                  <p class="card-text">Our fruits are handpicked and delivered fresh from the farm.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="./images/green apple juice.jpg" class="card-img-top" alt="Healthy Lifestyle">
                <div class="card-body">
                  <h5 class="card-title">Promoting Healthy Lifestyle</h5>
                  <p class="card-text">We believe in promoting a healthy lifestyle through nutritious fruits.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="./images/red and green apple.jpg" class="card-img-top" alt="Our Team">
                <div class="card-body">
                  <h5 class="card-title">Our Dedicated Team</h5>
                  <p class="card-text">Our team ensures the best quality fruits for our customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    blog: `
    <section id="blog">
      <div class="container">
        <h2 class="text-center">Our Blog</h2>
        <p class="text-center text-muted">Discover tips, benefits, and interesting facts about fruits and healthy living.</p>
        <div class="row mt-4">
          <!-- Blog Post 1 -->
          <div class="col-md-6">
            <div class="card shadow-sm mb-4">
              <img src="./images/wallpaper.jpg" class="card-img-top" alt="Blog Post 1">
              <div class="card-body">
                <h5 class="card-title">5 Benefits of Eating Fresh Fruits</h5>
                <p class="card-text">Discover why fresh fruits are essential for a healthy lifestyle...</p>
                <a href="#" class="btn btn-success" onclick="loadBlogDetail1()">Read More <i class="bi bi-arrow-right-circle"></i></a>
              </div>
            </div>
          </div>
          <!-- Blog Post 2 -->
          <div class="col-md-6">
            <div class="card shadow-sm mb-4">
              <img src="./images/yellow fruit.jpg" class="card-img-top" alt="Blog Post 2">
              <div class="card-body">
                <h5 class="card-title">Top 10 Exotic Fruits You Must Try</h5>
                <p class="card-text">Explore the world of exotic fruits and their unique flavors...</p>
                <a href="#" class="btn btn-success" onclick="loadBlogDetail2()">Read More <i class="bi bi-arrow-right-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  blogDetail1: `
    <section id="blog-detail">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">5 Benefits of Eating Fresh Fruits</h2>
            <p class="text-center text-muted">Unlock the secrets to a healthier lifestyle by incorporating fresh fruits into your diet.</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <img src="./images/wallpaper.jpg" class="img-fluid rounded shadow" alt="Fresh Fruits">
          </div>
          <div class="col-md-6">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="bi bi-heart-fill text-success"></i> <strong>Boosts Immunity:</strong> Fresh fruits are packed with essential vitamins and antioxidants that strengthen your immune system.</li>
              <li class="list-group-item"><i class="bi bi-activity text-success"></i> <strong>Improves Digestion:</strong> High fiber content in fruits promotes better digestion and gut health.</li>
              <li class="list-group-item"><i class="bi bi-brightness-high-fill text-success"></i> <strong>Enhances Skin Health:</strong> Natural nutrients in fruits give your skin a radiant and youthful glow.</li>
              <li class="list-group-item"><i class="bi bi-lightning-fill text-success"></i> <strong>Provides Energy:</strong> Fruits are a natural source of quick and sustainable energy.</li>
              <li class="list-group-item"><i class="bi bi-bandaid-fill text-success"></i> <strong>Reduces Risk of Diseases:</strong> Regular consumption lowers the risk of chronic diseases like diabetes and heart disease.</li>
            </ul>
            <button class="btn btn-success mt-4" onclick="loadPage('blog')">Back to Blog <i class="bi bi-arrow-left-circle"></i></button>
          </div>
        </div>
      </div>
    </section>
  `,
  blogDetail2: `
    <section id="blog-detail">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">Top 10 Exotic Fruits You Must Try</h2>
            <p class="text-center text-muted">Explore the world of exotic fruits and learn about their unique flavors, origins, and health benefits.</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <img src="./images/yellow fruit.jpg" class="img-fluid rounded shadow" alt="Exotic Fruits">
          </div>
          <div class="col-md-6">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item"><i class="bi bi-geo-alt-fill text-success"></i> <strong>Durian:</strong> Known as the "king of fruits," durian has a strong aroma and creamy texture.</li>
              <li class="list-group-item"><i class="bi bi-geo-alt-fill text-success"></i> <strong>Rambutan:</strong> A tropical fruit with a sweet and tangy flavor, similar to lychee.</li>
              <li class="list-group-item"><i class="bi bi-geo-alt-fill text-success"></i> <strong>Dragon Fruit:</strong> A visually stunning fruit with a mildly sweet taste and crunchy seeds.</li>
              <li class="list-group-item"><i class="bi bi-geo-alt-fill text-success"></i> <strong>Passion Fruit:</strong> Bursting with tartness and packed with nutrients, perfect for juices.</li>
              <li class="list-group-item"><i class="bi bi-geo-alt-fill text-success"></i> <strong>Jackfruit:</strong> A versatile fruit used in both sweet and savory dishes.</li>
            </ol>
            <button class="btn btn-success mt-4" onclick="loadPage('blog')">Back to Blog <i class="bi bi-arrow-left-circle"></i></button>
          </div>
        </div>
      </div>
    </section>
  `,
  
  products: `
      <section id="products">
        <div class="container text-center">
          <h2>Our Products</h2>
          <div class="mb-3">
            <input type="text" class="form-control" id="productSearch" placeholder="Search for products..." oninput="searchProduct()">
          </div>
          <div class="row mt-4" id="product-list">
            <div class="col-md-3 col-sm-6">
              <div class="card">
                <img src="./images/red apple.jpg" class="card-img-top" alt="Apple">
                <div class="card-body">
                  <h5 class="card-title">Apple</h5>
                  <p class="text-success fw-bold">$2.99</p>
                  <button class="btn btn-success" onclick="alert('Added Apple to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card">
                <img src="./images/banana.jpg" class="card-img-top" alt="Banana">
                <div class="card-body">
                  <h5 class="card-title">Banana</h5>
                  <p class="text-success fw-bold">$1.49</p>
                  <button class="btn btn-success" onclick="alert('Added Banana to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card">
                <img src="./images/mango.jpg" class="card-img-top" alt="mango">
                <div class="card-body">
                  <h5 class="card-title">Mango</h5>
                  <p class="text-success fw-bold">$5.49</p>
                  <button class="btn btn-success" onclick="alert('Added Mango to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
             <div class="col-md-3 col-sm-6">
              <div class="card">
                <img src="./images/cherry.jpg" class="card-img-top" alt="cherry">
                <div class="card-body">
                  <h5 class="card-title">Cherry</h5>
                  <p class="text-success fw-bold">$0.32</p>
                  <button class="btn btn-success" onclick="alert('Added Cherry to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
             <div class="col-md-3 col-sm-6 mt-4">
              <div class="card">
                <img src="./images/grapes.jpg" class="card-img-top" alt="grapes">
                <div class="card-body">
                  <h5 class="card-title">Grapes</h5>
                  <p class="text-success fw-bold">$3.14</p>
                  <button class="btn btn-success" onclick="alert('Added Grapes to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
             <div class="col-md-3 col-sm-6 mt-4">
              <div class="card">
                <img src="./images/anar.jpg" class="card-img-top" alt="anar">
                <div class="card-body">
                  <h5 class="card-title">Anar</h5>
                  <p class="text-success fw-bold">$2.49</p>
                  <button class="btn btn-success" onclick="alert('Added Anar to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mt-4">
              <div class="card">
                <img src="./images/lemon.jpg" class="card-img-top" alt="lemon">
                <div class="card-body">
                  <h5 class="card-title">Lemon</h5>
                  <p class="text-success fw-bold">$1.29</p>
                  <button class="btn btn-success" onclick="alert('Added Lemon to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mt-4">
              <div class="card">
                <img src="./images/strawberry.jpg" class="card-img-top" alt="strawberry">
                <div class="card-body">
                  <h5 class="card-title">Strawberry</h5>
                  <p class="text-success fw-bold">$5.20</p>
                  <button class="btn btn-success" onclick="alert('Added Strawberry to cart!')">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  contact: `
      <section id="contact" style="background-color: #f8f9fa; padding: 50px 0;">
  <div class="container">
    <h2 class="text-center mb-5" style="font-weight: bold; color: #333;">Contact Us</h2>
    <div class="card mx-auto shadow-lg" style="max-width: 600px; border-radius: 15px; border: none;">
      <div class="card-body p-4">
        <form>
          <div class="mb-4">
            <label for="name" class="form-label" style="font-weight: 600;">Your Name</label>
            <input type="text" class="form-control shadow-sm" id="name" placeholder="Enter your name" style="border-radius: 10px;">
          </div>
          <div class="mb-4">
            <label for="email" class="form-label" style="font-weight: 600;">Email Address</label>
            <input type="email" class="form-control shadow-sm" id="email" placeholder="Enter your email" style="border-radius: 10px;">
          </div>
          <div class="mb-4">
            <label for="message" class="form-label" style="font-weight: 600;">Your Message</label>
            <textarea class="form-control shadow-sm" id="message" rows="4" placeholder="Write your message here..." style="border-radius: 10px;"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-success px-5 py-2" style="border-radius: 30px; font-weight: 600;" onclick="alert('Message sent successfully!')">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    `
};
function loadPage(page) {
  document.getElementById('content').innerHTML = pages[page];
}

function loadBlogDetail1() {
  loadPage('blogDetail1');
}

function loadBlogDetail2() {
  loadPage('blogDetail2');
}

function searchProduct() {
  const query = document.getElementById('productSearch').value.toLowerCase();
  const products = document.querySelectorAll('#product-list .card');
  products.forEach(product => {
    const title = product.querySelector('.card-title').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

loadPage('home');

