/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */

export const DEFAULT_TEMPLATE = `
    <div #template>
        <ng-content></ng-content>
    </div>
    <ul class="ng2-pagination"
        role="navigation"
        aria-label="Pagination"
        *ngIf="!hasTemplate && !(autoHide && pages.length <= 1)">

        <li class="pagination-previous prev" [class.disabled]="isFirstPage()" *ngIf="directionLinks">
            <a *ngIf="1 < getCurrent()" (click)="previous()" aria-label="Next page">
                上一页 <span class="show-for-sr">page</span>
            </a>
            <span *ngIf="isFirstPage()">上一页 <span class="show-for-sr">page</span></span>
        </li>

        <li [class.current]="getCurrent() === page.value" *ngFor="let page of pages">
            <a (click)="setCurrent(page.value)" *ngIf="getCurrent() !== page.value">
                <span class="show-for-sr">Page</span>
                <span>{{ page.label }}</span>
            </a>
            <div *ngIf="getCurrent() === page.value">
                <span class="show-for-sr">You're on page</span>
                <span>{{ page.label }}</span>
            </div>
        </li>

        <li class="pagination-next next" [class.disabled]="isLastPage()" *ngIf="directionLinks">
            <a *ngIf="!isLastPage()" (click)="next()" aria-label="Next page">
                下一页 <span class="show-for-sr">page</span>
            </a>
            <span *ngIf="isLastPage()">下一页 <span class="show-for-sr">page</span></span>
        </li>

    </ul>
    `;

export const DEFAULT_STYLES = `
.ng2-pagination {
  margin-top: 10px;
  text-align: right;
  margin-bottom: 70px;}
  .ng2-pagination::after {
    clear: both; }
  .ng2-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 0.875rem;
    margin-right: 0.0625rem;
    border: 1px solid #333;
    color: #333;
    height: 30px;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    margin: auto 3px;}
    .prev, .next{
      width: 60px;
    }
  .ng2-pagination li {
    display: inline-block; }
  .ng2-pagination a,
  .ng2-pagination button {
    color: #0a0a0a;
    display: block;
    padding: 0 0.625rem;
    border-radius: 0; }
  .ng2-pagination .current {
    padding: 0 0.625rem;
    text-decoration: underline;
    border: none;
    cursor: default; }
  .ng2-pagination .disabled {
    padding: 0 0.625rem;
    border: 1px solid #bfbfbf;
    color: #bfbfbf;
    cursor: default; }
  .ng2-pagination .ellipsis::after {
    content: '…';
    padding: 0 0.625rem;
    color: #0a0a0a; }

.ng2-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }`;
