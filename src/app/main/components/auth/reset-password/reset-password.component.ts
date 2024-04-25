import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/main/service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email!: string;
  isLoading: boolean = false;

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.email = '';
  }

  resetPassword(): void {
    this.isLoading = true;

    this.userService.resetPassword(this.email).subscribe({
      next: () => {
        this.email = ''
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Senha resetada! Confira seu e-mail.', life: 5000 });
      },
      error: () => this.isLoading = false,
      complete: () => this.isLoading = false
    })
  }
}
