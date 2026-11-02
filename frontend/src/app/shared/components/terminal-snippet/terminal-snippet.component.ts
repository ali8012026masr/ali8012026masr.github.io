import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-snippet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      <!-- Window Title Bar -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-canvas/80 border-b border-border">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span class="ml-2 text-xs font-mono text-text-muted">RamimEngineer.java</span>
        </div>
        <button
          type="button"
          (click)="copyCode()"
          class="flex items-center gap-1.5 px-2 py-0.5 rounded text-xs text-text-muted hover:text-text-main hover:bg-surface-hover transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
          [attr.aria-label]="copied() ? 'Copied' : 'Copy code snippet'"
        >
          @if (copied()) {
            <span class="text-emerald-500 font-semibold">✓ Copied</span>
          } @else {
            <span>Copy</span>
          }
        </button>
      </div>

      <!-- Code Body -->
      <div class="p-4 sm:p-6 overflow-x-auto text-text-main leading-relaxed select-text">
        <div class="text-text-muted">// Enterprise Full-Stack Specification</div>
        <div><span class="text-purple-400 dark:text-purple-300">public record</span> <span class="text-emerald-500 dark:text-emerald-400 font-semibold">FullStackEngineer</span>(</div>
        <div class="pl-4 sm:pl-6">
          <span class="text-blue-400">String</span> name, <span class="text-text-muted">// "Mohammad Ali Sikder Ramim"</span>
        </div>
        <div class="pl-4 sm:pl-6">
          <span class="text-blue-400">String</span> primarySpecialization, <span class="text-text-muted">// "Java & Spring Boot + Angular"</span>
        </div>
        <div class="pl-4 sm:pl-6">
          <span class="text-blue-400">List&lt;String&gt;</span> coreStack, <span class="text-text-muted">// ["Java 25", "Spring Boot", "Angular", "TypeScript", "PostgreSQL"]</span>
        </div>
        <div class="pl-4 sm:pl-6">
          <span class="text-blue-400">String</span> flagshipProject, <span class="text-text-muted">// "Horizon (Full-Stack Travel Booking)"</span>
        </div>
        <div class="pl-4 sm:pl-6">
          <span class="text-blue-400">boolean</span> availableForHire <span class="text-text-muted">// true</span>
        </div>
        <div>) &#123;</div>
        <div class="pl-4 sm:pl-6 mt-1 text-text-muted">
          &#64;Contract(pure = true)<br>
          <span class="text-purple-400 dark:text-purple-300">public</span> <span class="text-blue-400">void</span> <span class="text-emerald-500 dark:text-emerald-400">buildReliableSoftware</span>() &#123;<br>
          &nbsp;&nbsp;<span class="text-text-main">verifyRequirements();</span><br>
          &nbsp;&nbsp;<span class="text-text-main">enforceTypeSafety();</span><br>
          &nbsp;&nbsp;<span class="text-text-main">deliverDefensibleSolutions();</span><br>
          &#125;
        </div>
        <div>&#125;</div>
      </div>
    </div>
  `
})
export class TerminalSnippetComponent {
  readonly copied = signal<boolean>(false);

  private readonly snippet = `public record FullStackEngineer(
    String name, // "Mohammad Ali Sikder Ramim"
    String primarySpecialization, // "Java & Spring Boot + Angular"
    List<String> coreStack, // ["Java 25", "Spring Boot", "Angular", "TypeScript", "PostgreSQL"]
    String flagshipProject, // "Horizon (Full-Stack Travel Booking)"
    boolean availableForHire // true
) {
    public void buildReliableSoftware() {
        verifyRequirements();
        enforceTypeSafety();
        deliverDefensibleSolutions();
    }
}`;

  copyCode(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.snippet).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }
}
