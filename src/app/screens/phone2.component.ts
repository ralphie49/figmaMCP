// This file has been removed.
// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY
// Agent: UI Screen Generation from Figma Agent v2.0
// Figma File: 9JMNzjswh41uGeD5rXF8Ru
// Screen: phone 2 (393×852px)
// Screen Type: Mobile / Product Detail
// Images: phone2-coffee-seed.png, phone2-starbucks-cup-transparent-1.png
// Generated: 2026-05-20T10:00:00Z
// Mode: INLINE_MODE
// Angular Version: 18+
// Guidelines Applied: .github/copilot-instructions.md

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phone2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="screen">
      <!-- Header -->
      <div class="header">
        <span class="brand">CoffeeMan</span>
        <span class="tagline">Details</span>
      </div>

      <!-- Product Card -->
      <div class="product-card">
        <img
          src="assets/figma-images/phone2-starbucks-cup-transparent-1.png"
          alt="Caramel Frappuccino"
          style="width: 180px; height: 200px; object-fit: contain;" />
        <div class="product-info">
          <span class="product-name">Caramel Frappuccino</span>
          <span class="product-price">$30.00</span>
        </div>
      </div>

      <!-- Size Options -->
      <div class="size-options">
        <span class="size-label">Size Options</span>
        <div class="sizes">
          @for (size of sizes(); track size) {
            <button class="size-btn" [class.selected]="selectedSize() === size" (click)="selectedSize.set(size)">{{ size }}</button>
          }
        </div>
      </div>

      <!-- Add to Order -->
      <button class="cta-btn" (click)="onAddToOrder()">Add to Order</button>
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
    .product-card {
      background: #4E9F6B;
      border-radius: 40px;
      padding: 32px 24px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      box-shadow: 0px 8px 24px rgba(78, 159, 107, 0.35);
      margin-bottom: 32px;
    }
    .product-info { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .product-name { font-size: 18px; font-weight: 700; color: #FFFFFF; }
    .product-price { font-size: 16px; font-weight: 600; color: #FFFFFF; }
    .size-options { margin-bottom: 24px; }
    .size-label { font-size: 16px; font-weight: 600; color: #1A1A1A; margin-bottom: 8px; display: block; }
    .sizes { display: flex; flex-direction: row; gap: 16px; }
    .size-btn {
      background: #EDEDED;
      border: none;
      border-radius: 62px;
      padding: 15px 25px;
      font-size: 16px;
      font-weight: 600;
      color: #1A1A1A;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .size-btn.selected, .size-btn:hover {
      background: #56A568;
      color: #FFFFFF;
    }
    .cta-btn {
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
export class Phone2Component {
  sizes = signal(['S', 'M', 'L', 'XL']);
  selectedSize = signal('M');

  onAddToOrder(): void {
    // TODO: Implement add to order
  }
}
