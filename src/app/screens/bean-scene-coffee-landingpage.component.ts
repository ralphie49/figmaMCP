// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY
// Agent: UI Screen Generation from Figma Agent v2.0
// Figma File: DqxZSb3UhFS8JEweLxR1j3
// Screen: bean_scene_coffee_landingpage (1366×5085px)
// Screen Type: Landing / Marketing Page
// Images: bean-scene-coffee-landingpage-fotter-image.png, bean-scene-coffee-landingpage-coffee-image.png, bean-scene-coffee-landingpage-coffee-blast-1.png, bean-scene-coffee-landingpage-rectangle-5.png, bean-scene-coffee-landingpage-rectangle-7.png, bean-scene-coffee-landingpage-rectangle-9.png, bean-scene-coffee-landingpage-rectangle-11.png, bean-scene-coffee-landingpage-rectangle-13.png, bean-scene-coffee-landingpage-coffee-beans-1.png, bean-scene-coffee-landingpage-badge-1.png, bean-scene-coffee-landingpage-coffee-cup-1.png, bean-scene-coffee-landingpage-best-price-1.png, bean-scene-coffee-landingpage-rectangle-14.png, bean-scene-coffee-landingpage-coffee-bean.png, bean-scene-coffee-landingpage-cup.png, bean-scene-coffee-landingpage-pngwing-1.png
// Generated: 2026-05-20T00:00:00Z
// Mode: INLINE_MODE
// Angular Version: 18+
// Guidelines Applied: .github/copilot-instructions.md

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bean-scene-coffee-landingpage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="landingpage" style="width: 1366px; min-height: 5085px; background: #FFFEFC; position: relative; overflow-x: hidden; font-family: 'Playfair Display', serif;">
      <!-- Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 32px 80px 0 80px;">
        <span style="font-family: 'Clicker Script', cursive; font-size: 35px; color: #FFFFFF; background: #603809; padding: 8px 32px; border-radius: 12px;">Bean Scene</span>
        <nav style="display: flex; gap: 40px;">
          @for (item of navItems(); track item) {
            <span style="font-size: 14px; color: #FFFFFF; cursor: pointer;">{{ item }}</span>
          }
        </nav>
        <div style="display: flex; gap: 24px; align-items: center;">
          <span style="font-size: 14px; color: #FFFFFF; text-decoration: underline; cursor: pointer;">Sign In</span>
          <button style="background: #F9C06A; color: #1E1E1E; border: none; border-radius: 24px; padding: 12px 32px; font-size: 14px; font-weight: 500; box-shadow: 0px 6px 12px 0px rgba(249,192,106,0.22); cursor: pointer;">Sign Up</button>
        </div>
      </div>
      <!-- Hero Section -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 120px 80px 0 80px;">
        <div style="max-width: 600px;">
          <h1 style="font-size: 54px; font-weight: 700; color: #603809; margin-bottom: 24px;">Discover the best coffee</h1>
          <p style="font-size: 20px; color: #707070; line-height: 34px; margin-bottom: 32px;">Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
          <button style="background: #F9C06A; color: #1E1E1E; border: none; border-radius: 24px; padding: 16px 48px; font-size: 16px; font-weight: 700; box-shadow: 0px 6px 12px 0px rgba(249,192,106,0.22); cursor: pointer;">Order Now</button>
        </div>
        <img src="assets/figma-images/bean-scene-coffee-landingpage-coffee-image.png" alt="Coffee" style="width: 600px; height: 400px; object-fit: cover; border-radius: 40px; box-shadow: 0px 8px 24px rgba(78, 159, 107, 0.35);" />
      </div>
      <!-- Features Section -->
      <div style="padding: 120px 80px 0 80px;">
        <h2 style="font-size: 54px; font-weight: 700; color: #603809; text-align: center; margin-bottom: 24px;">Why are we different?</h2>
        <p style="font-size: 20px; color: #707070; text-align: center; margin-bottom: 64px;">We don’t just make your coffee, we make your day!</p>
        <div style="display: flex; justify-content: space-between; gap: 40px;">
          <div style="background: #FFEED8; border-radius: 24px; padding: 40px 32px; flex: 1; display: flex; flex-direction: column; align-items: center;">
            <img src="assets/figma-images/bean-scene-coffee-landingpage-coffee-beans-1.png" alt="Supreme Beans" style="width: 88px; height: 88px; margin-bottom: 24px;" />
            <span style="font-size: 28px; font-weight: 700; color: #603809; margin-bottom: 12px;">Supreme Beans</span>
            <span style="font-size: 20px; color: #707070; text-align: center;">Beans that provides great taste</span>
          </div>
          <div style="background: #FFEED8; border-radius: 24px; padding: 40px 32px; flex: 1; display: flex; flex-direction: column; align-items: center;">
            <img src="assets/figma-images/bean-scene-coffee-landingpage-badge-1.png" alt="High Quality" style="width: 88px; height: 88px; margin-bottom: 24px;" />
            <span style="font-size: 28px; font-weight: 700; color: #603809; margin-bottom: 12px;">High Quality</span>
            <span style="font-size: 20px; color: #707070; text-align: center;">We provide the highest quality</span>
          </div>
          <div style="background: #FFEED8; border-radius: 24px; padding: 40px 32px; flex: 1; display: flex; flex-direction: column; align-items: center;">
            <img src="assets/figma-images/bean-scene-coffee-landingpage-coffee-cup-1.png" alt="Extraordinary" style="width: 88px; height: 88px; margin-bottom: 24px;" />
            <span style="font-size: 28px; font-weight: 700; color: #603809; margin-bottom: 12px;">Extraordinary</span>
            <span style="font-size: 20px; color: #707070; text-align: center;">Coffee like you have never tasted</span>
          </div>
          <div style="background: #FFEED8; border-radius: 24px; padding: 40px 32px; flex: 1; display: flex; flex-direction: column; align-items: center;">
            <img src="assets/figma-images/bean-scene-coffee-landingpage-best-price-1.png" alt="Affordable Price" style="width: 88px; height: 88px; margin-bottom: 24px;" />
            <span style="font-size: 28px; font-weight: 700; color: #603809; margin-bottom: 12px;">Affordable Price</span>
            <span style="font-size: 20px; color: #707070; text-align: center;">Our Coffee prices are easy to afford</span>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <footer style="margin-top: 120px; background: #442808; color: #FFF; padding: 80px 0 0 0;">
        <div style="display: flex; justify-content: space-between; padding: 0 80px;">
          <div>
            <span style="font-family: 'Clicker Script', cursive; font-size: 54px; color: #FFF;">Bean Scene</span>
            <p style="font-size: 14px; color: #FFF; max-width: 380px; margin-top: 24px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div>
            <span style="font-size: 26px; font-weight: 700; color: #FFF;">Company</span>
            <p style="font-size: 18px; color: #FFF; margin-top: 24px;">How we work<br>Terms of service<br>Pricing<br>FAQ</p>
          </div>
          <div>
            <span style="font-size: 26px; font-weight: 700; color: #FFF;">About</span>
            <p style="font-size: 18px; color: #FFF; margin-top: 24px;">Menu<br>Features<br>News & Blogs<br>Help & Supports</p>
          </div>
          <div>
            <span style="font-size: 26px; font-weight: 700; color: #FFF;">Contact Us</span>
            <p style="font-size: 18px; color: #FFF; margin-top: 24px;">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016<br>+1 202-918-2132<br>beanscene&#64;mail.com<br>www.beanscene.com</p>
          </div>
        </div>
        <img src="assets/figma-images/bean-scene-coffee-landingpage-fotter-image.png" alt="Footer" style="width: 100%; margin-top: 40px;" />
      </footer>
    </div>
  `
})
export class BeanSceneCoffeeLandingpageComponent {
  navItems = signal(['Home', 'Menu', 'About Us', 'Contact Us']);
}
