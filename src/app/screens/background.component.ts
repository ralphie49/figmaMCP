// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY
// Agent: UI Screen Generation from Figma Agent v2.0
// Figma File: 9JMNzjswh41uGeD5rXF8Ru
// Screen: background (1440×1024px)
// Screen Type: Background
// Images: background-gradient.png
// Generated: 2026-05-20T10:00:00Z
// Mode: INLINE_MODE
// Angular Version: 18+
// Guidelines Applied: .github/copilot-instructions.md

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background"></div>
  `,
  styles: [`
    .background {
      width: 1440px;
      height: 1024px;
      background: linear-gradient(180deg, #DAAE6B 0%, #E1B581 100%);
      backdrop-filter: blur(20px);
    }
  `]
})
export class BackgroundComponent {}
