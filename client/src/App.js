export function App() {
    return (
        <main>
            <nav>
			<a class='nav-logo-link'>
				<span class='nav-title'>tinycade</span>
			</a>
			<button id='nav-toggle'>&lt; MANU</button>
			<span id='nav-links'>
				<a href='/'>HOME</a> // 
				<a href='/assembly'>ASSEMBLY</a> //
				<a href=''>GAME LIBRARY</a> //
				<a href=''>HELP</a>
			</span>
		</nav>

		<header id='home-hero'>
			<h1>Tiny arcade experiences on a tiny budget.</h1>
			<p id='hero-scroll-prompt'>SCROLL DOWN TO LEARN MORE</p>
		</header>

		<section id="how-it-works" class="page-section is-dark">
			<div class="container">
				<h2>How does tinycade work?</h2>
				<div class="section-items">
				<ol>
					<li>
					When playing a game, your phone camera turns on.
					</li>

					<li>
					The tinycade uses mirrors to reflect the image to the bottom of the controller.
					</li>

					<li>
					When the controller is moved, it blocks and unblocks hero cards that your phone camera can read to determine how you moved.
					</li>
				</ol>
				<img id="x-ray-img" src="./assets/home/tinycade_x_ray.png" alt="Tinycade x-ray view" />
				<span class="x-ray-label" id="x-ray-label-1">1 PHONE CAMERA</span>
				<span class="x-ray-label" id="x-ray-label-2">2 MIRROR ONE</span>
				<span class="x-ray-label" id="x-ray-label-3">3 CONTROLLER</span>
				<span class="x-ray-label" id="x-ray-label-4">2 MIRROR TWO</span>
				</div>
			</div>
		</section>

		<section id="how-to-build" class="page-section">
			<div class="container">
				<h2>How do I build a tinycade?</h2>
				<div class="section-items">
				<ol>
					<li>
					Buy the recommended <a href="#">supplies</a>.
					</li>

					<li>
					Follow our detailed and easy to understand <a href="#">instructions</a>.
					</li>

					<li>
					There is no third step, that is all.
					</li>
				</ol>

				<img id="exploded-img" src="./assets/home/tinycade_exploded.png" alt="Tinycade exploded view" />
				</div>
			</div>
		</section>

		<section id="what-to-play" class="page-section is-dark placeholder">
			<div class="container">
				<h2 class="placeholder">Games and Instructions coming soon!</h2>
			</div>
		</section>

		<footer id="footer">
			<div id="footer-content"class="container">
				<div id="footer-menus">
				<a class="footer-logo-link" href="https://www.tinycade.io">
					<img class="footer-logo" src="./assets/tinycade_logo_dark.svg" alt="Tinycade Logo" />
					<span class="footer-title">tinycade</span>
				</a>

				<a class="footer-menu-link" href="https://petroochio.github.io">Home //</a>
				<a class="footer-menu-link" href="https://petroochio.github.io">Assembly //</a>
				<a class="footer-menu-link" href="https://petroochio.github.io">Game Library //</a>
				<a class="footer-menu-link" href="https://petroochio.github.io">Help //</a>
				</div>
				<div id="footer-contributors">
				<h3>Contributors</h3>
				<div class="footer-names-cols">
					<a class="footer-link" href="https://petroochio.github.io">Peter Gyory</a>
					<a class="footer-link" href="https://clementzheng.info/">Clement Zheng</a>
					<a class="footer-link" href="#">Dylan Turner</a>
					<a class="footer-link" href="#">Perry Owens</a>
					<a class="footer-link" href="https://www.colorado.edu/atlas/ellen-yi-luen-do">Ellen Do</a>
					<a class="footer-link" href="#">Allison Palmer</a>
					<a class="footer-link" href="#">Rhys Ruefort</a>
				</div>
				</div>
				<div id="footer-logos">
				<h3><a class="underline" href="https://github.com/Tinycade/tinycade-homepage/blob/main/LICENSE">read license</a></h3>
				<div class="logo-block">
					<a href="https://www.colorado.edu/atlas/acme-lab"><img src="./assets/acme_logo.svg" alt="ACME Lab Logo" /></a>

					<a href="https://www.colorado.edu/atlas/"><img class="atlas-brand" src="./assets/atlas_logo.png" alt="ATLAS Institute Logo" /></a>
					<a class="cu-brand" href="https://www.colorado.edu"><img src="./assets/cu_logo.png" alt="University of Colorado Boulder Logo" /></a>
				</div>
				</div>
			</div>
		</footer>
        </main>
    );
}