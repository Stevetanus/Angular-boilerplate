import { Directive, ElementRef, inject, input, computed } from '@angular/core';

// Example type for sizes and status
type InputSize = 'small' | 'default' | 'large';
type InputStatus = 'default' | 'success' | 'error';

// Utility function to merge classes
function mergeClasses(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Variants function similar to ZardInputVariants
function inputVariants({
  size,
  status,
  borderless,
}: {
  size: InputSize;
  status: InputStatus;
  borderless: boolean;
}) {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    default: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const statusClasses = {
    default: 'border-gray-300',
    success: 'border-green-500',
    error: 'border-red-500',
  };

  const borderlessClass = borderless ? 'border-0' : 'border';

  return mergeClasses(
    sizeClasses[size],
    statusClasses[status],
    borderlessClass,
    'rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
  );
}

@Directive({
  selector: 'input[appMyInput], textarea[appMyInput]',
  standalone: true,
  exportAs: 'myInput',
  host: {
    '[class]': 'classes()',
  },
})
export class CustomInputDirective {
  private readonly el = inject(ElementRef);
  private readonly isTextarea =
    this.el.nativeElement.tagName.toLowerCase() === 'textarea';

  // Signals for properties
  readonly size = input<InputSize>('default');
  readonly status = input<InputStatus>('default');
  readonly borderless = input(false);
  readonly extraClass = input<string>('');

  // Computed classes
  readonly classes = computed(() =>
    mergeClasses(
      inputVariants({
        size: this.size(),
        status: this.status(),
        borderless: this.borderless(),
      }),
      this.extraClass(),
    ),
  );
}
