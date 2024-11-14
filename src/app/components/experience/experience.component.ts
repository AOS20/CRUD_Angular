// src/app/components/experience/experience.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvService } from '../../services/cv.service';
import { Experience } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  experienceForm: FormGroup;

  constructor(private cvService: CvService, private fb: FormBuilder) {
    // Inicializamos el formulario
    this.experienceForm = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadExperiences();
  }

  // Cargar todas las experiencias
  loadExperiences(): void {
    this.cvService.getExperiences().subscribe((experiences) => {
      this.experiences = experiences;
      console.log('Experiencias cargadas:', experiences);
    });
  }

  // Agregar nueva experiencia
  addNewExperience(): void {
    if (this.experienceForm.valid) {
      const newExperience: Experience = this.experienceForm.value;
      this.cvService.addExperience(newExperience).subscribe((response) => {
        console.log('Experiencia agregada:', response);
        this.loadExperiences(); // Recargamos la lista
        this.experienceForm.reset(); // Limpiamos el formulario
      });
    }
  }

  // Eliminar experiencia
  deleteExperience(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta experiencia?')) {
      this.cvService.deleteExperience(id).subscribe(() => {
        console.log('Experiencia eliminada');
        this.loadExperiences(); // Recargamos la lista
      });
    }
  }

  // Editar experiencia
  editExperience(experience: Experience): void {
    this.experienceForm.patchValue(experience);
  }
}
