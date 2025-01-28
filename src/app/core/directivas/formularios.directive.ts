import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[soloNumeros]'
})
export class SoloNumerosDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[0-9]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }
}

@Directive({
  selector: '[soloLetras]'
})
export class SoloLetrasDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }
}

@Directive({
  selector: '[soloLetrasNumeros]'
})
export class SoloLetrasNumerosDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }
}

@Directive({
  selector: '[dni]'
})
export class DniDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[0-9]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value
    const regex = /^\d{0,8}$/ // Acepta hasta 8 dígitos numéricos

    if (!regex.test(initialValue)) {
      this.el.nativeElement.value = initialValue.slice(0, 8) // Limita la longitud a 8 caracteres
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault()

    navigator.clipboard.readText().then(pastedText => {
      const modifiedText = pastedText.replace(/\D/g, '').slice(0, 8) // Eliminar todo lo que no sea número y limitar la longitud a 8 caracteres
      this.insertTextAtCursor(modifiedText)
    }).catch(error => {
      console.error('Error al leer el portapapeles:', error)
    })
  }

  insertTextAtCursor(text: string) {
    const input = this.el.nativeElement
    const startPos = input.selectionStart
    const endPos = input.selectionEnd
    const currentValue = input.value

    input.value = currentValue.substring(0, startPos) + text + currentValue.substring(endPos, currentValue.length)
    input.setSelectionRange(startPos + text.length, startPos + text.length)
  }
}

@Directive({
  selector: '[ubigeo]'
})
export class UbigeoDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[0-9]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value
    const regex = /^\d{0,6}$/ // Acepta hasta 6 dígitos numéricos para el código de ubigeo

    if (!regex.test(initialValue)) {
      this.el.nativeElement.value = initialValue.slice(0, 6) // Limita la longitud a 6 caracteres
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault()

    navigator.clipboard.readText().then(pastedText => {
      const modifiedText = pastedText.replace(/\D/g, '').slice(0, 6) // Eliminar todo lo que no sea número y limitar la longitud a 6 caracteres
      this.insertTextAtCursor(modifiedText)
    }).catch(error => {
      console.error('Error al leer el portapapeles:', error)
    })
  }

  insertTextAtCursor(text: string) {
    const input = this.el.nativeElement
    const startPos = input.selectionStart
    const endPos = input.selectionEnd
    const currentValue = input.value

    input.value = currentValue.substring(0, startPos) + text + currentValue.substring(endPos, currentValue.length)
    input.setSelectionRange(startPos + text.length, startPos + text.length)
  }
}

@Directive({
  selector: '[celular]'
})
export class CelularDirective {
  constructor(private readonly el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Tab', 'Enter']
    const allowedChars = /[0-9]/

    if (!allowedKeys.includes(event.key) && !allowedChars.test(event.key)) {
      event.preventDefault()
    }
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value
    const regex = /^\d{0,9}$/ // Acepta hasta 9 dígitos numéricos

    if (!regex.test(initialValue)) {
      this.el.nativeElement.value = initialValue.slice(0, 9) // Limita la longitud a 9 caracteres
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault()

    navigator.clipboard.readText().then(pastedText => {
      const modifiedText = pastedText.replace(/\D/g, '').slice(0, 9) // Eliminar todo lo que no sea número y limitar la longitud a 9 caracteres
      this.insertTextAtCursor(modifiedText)
    }).catch(error => {
      console.error('Error al leer el portapapeles:', error)
    })
  }

  insertTextAtCursor(text: string) {
    const input = this.el.nativeElement
    const startPos = input.selectionStart
    const endPos = input.selectionEnd
    const currentValue = input.value

    input.value = currentValue.substring(0, startPos) + text + currentValue.substring(endPos, currentValue.length)
    input.setSelectionRange(startPos + text.length, startPos + text.length)
  }
}

@Directive({
  selector: '[appCtrlAltKeyClick]'
})
export class CtrlAltKeyClickDirective {
  @Input('appCtrlAltKeyClick') key: string = ''
  @Input() isActive: boolean = false
  constructor(private readonly el: ElementRef) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isActive && this.isKeyComboPressed(event)) {
      event.preventDefault()
      if (!this.el.nativeElement.disabled) {
        this.el.nativeElement.click()
      }
    }
  }

  private isKeyComboPressed(event: KeyboardEvent): boolean {
    return event.ctrlKey && event.altKey && event.key.toLowerCase() === this.key.toLowerCase()
  }

  private isElementFocused(): boolean {
    return this.el.nativeElement === document.activeElement || this.el.nativeElement.contains(document.activeElement)
  }
}
