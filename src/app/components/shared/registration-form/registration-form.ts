import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AngularTokenService } from 'angular-token';

import { NotificationService } from '../../../utility/notification.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.html'
})

export class RegistrationForm implements OnInit {
  @Output() onSubmitSuccess: EventEmitter<any> = new EventEmitter();
  registrationForm: FormGroup;
  submitDisabled: Boolean = false;

  ngOnInit() {
    this.initRegistrationForm();
  }

  constructor(private tokenAuthSerivce: AngularTokenService,
              private fb: FormBuilder,
              private notifyService: NotificationService) { }

  onSignUpSubmit() {
    this.submitDisabled = true;
    this.tokenAuthSerivce.registerAccount(this.registrationForm.value)
                         .subscribe(this.onCreateSuccess, this.onCreateError);
  }

  private onCreateSuccess = (resp) => {
    this.notifyService.showSuccess('Successfully registered.');
    this.onSubmitSuccess.emit();
  }

  private onCreateError = (error) => {
    this.notifyService.showError(error);
    this.submitDisabled = false;
  }

  private initRegistrationForm() {
    const password = new FormControl('', [ Validators.required, Validators.minLength(8)]);
    const passwordConfirmation = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

    this.registrationForm = this.fb.group({
      login: ['', [Validators.required, CustomValidators.email]],
      name: [''],
      password,
      passwordConfirmation
    });
  }

}