// This file has been removed.
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-phone1',
  standalone: true,
  template: `
    <div style="background: #fff; padding: 24px; border-radius: 24px; max-width: 393px; margin: 0 auto; font-family: 'Sen', sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 20px; font-weight: 700;">CoffeeMan</span>
        <span><!-- shopping bag icon --></span>
      </div>
      <div style="font-size: 16px; color: #252525; margin: 16px 0;">Enjoy coffee any time</div>
      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
          @for (tab of tabs(); track tab) {
            <span
              class="tab"
              [style.font-weight]="activeTab() === tab ? '700' : '400'"
              [style.color]="activeTab() === tab ? '#1A1A1A' : '#9E9E9E'"
              (click)="activeTab.set(tab)">
              {{ tab }}
            </span>
          }
      </div>
      <div style="background: #55A166; border-radius: 105px; padding: 32px 0 0 0; margin-bottom: 24px; text-align: center;">
        <img src='https://figma.com/file/9JMNzjswh41uGeD5rXF8Ru/image/7b5c6d207f22cf3988b4ac5a7d8c5114a9e2429a' alt='coffee seed' style='width:120px; height:120px; border-radius:50%; margin-bottom:12px;' />
        <img src='https://figma.com/file/9JMNzjswh41uGeD5rXF8Ru/image/6950a55dc614b7b6f60b548475e5249ffc06a6e2' alt='Starbucks Cup' style='width:100px; height:100px; margin-bottom:12px;' />
          <div class="product-card">
            <img
              src="assets/figma-images/phone1-starbucks-cup-transparent-1.png"
              alt="Caramel Frappuccino"
              style="width: 180px; height: 200px; object-fit: contain;" />
            <div class="product-info">
              <span class="product-name">Caramel Frappuccino</span>
              <span class="product-price">$30.00</span>
            </div>
          </div>
      </div>
      <!-- @for for side coffee, dots, etc. can be added here if needed -->
        <button class="cta-btn" (click)="onAddToCart()">Add to Cart</button>
    </div>
  `,
  styles: [`
      .screen {
        width: 393px;
        min-height: 852px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        font-family: 'Sen', sans-serif;
        padding: 48px 24px 32px;
        box-sizing: border-box;
      }
      .header { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
      .brand { font-size: 20px; font-weight: 700; color: #1A1A1A; }
      .tagline { font-size: 14px; color: #9E9E9E; }
      .nav-tabs { display: flex; flex-direction: row; gap: 24px; margin-bottom: 32px; }
      .tab { font-size: 13px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.05em; }
      .product-card {
        background: #4E9F6B;
        border-radius: 40px;
        padding: 32px 24px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        box-shadow: 0px 8px 24px rgba(78, 159, 107, 0.35);
      }
      .product-info { display: flex; flex-direction: column; align-items: center; gap: 4px; }
      .product-name { font-size: 18px; font-weight: 700; color: #FFFFFF; }
      .product-price { font-size: 16px; font-weight: 600; color: #FFFFFF; }
      .cta-btn {
        margin-top: 32px;
        background: #1A1A1A;
        color: #FFFFFF;
        border: none;
        border-radius: 12px;
        padding: 16px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
      }
      .cta-btn:hover { background: #333333; }
    `]
  })
export class Phone1Component {
  activeTab = signal('DRINKS');
  tabs = signal(['DRINKS', 'HOT TEAS', 'BAKERY', 'HOT COFFEE']);

  onAddToCart(): void {
    // TODO: Implement add to cart
  }
}
