import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survey',
  imports: [CommonModule, RouterLink],
  templateUrl: './survey.html',
  styleUrl: './survey.css',
})
export class Survey {

  prashanja: any = [
    {
      question: "1. How would you rate our site from 1 to 10?",
      type: "radio",
      name: "rating",
      values: [
        "1", "2", "3", "4", "5"
      ]
    },
    {
      question: "2. Do you have any suggestions on how to improve our site?",
      type: "text",
      name: "improve",
      values: []
    },
    {
      question: "3. Did you like our blogs?",
      type: "radio",
      name: "blogliking",
      values: [
        "Yes", "No", "No comment"
      ]
    },
    {
      question: "4. What other topic would you like us to cover in our blogs?",
      type: "text",
      name: "newtopics",
      values: []
    },
    {
      question: "5. When are you filling this form?",
      type: "date",
      name: "dateoffilling",
      values: []
    },
    {
      question: "6. How did you find about our site?",
      type: "checkbox",
      name: "findsite",
      values: [
        "Friends", "Family", "Social Media", "Internet", "Other"
      ]
    },
    {
      question: "7. Would you recommend us to your family and friends?",
      type: "radio",
      name: "recommend",
      values: [
        "Yes", "No", "Maybe"
      ]
    }
  ];

}
