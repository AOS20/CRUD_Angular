// src/app/services/cv.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private apiUrl = 'http://localhost:3000'; // URL de json-server

  constructor(private http: HttpClient) {}

  // Obtener todas las experiencias
  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experiences`);
  }

  // Agregar una nueva experiencia
  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.apiUrl}/experiences`, experience);
  }

  // Actualizar una experiencia existente
  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      `${this.apiUrl}/experiences/${experience.id}`,
      experience
    );
  }

  // Eliminar una experiencia
  deleteExperience(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/experiences/${id}`);
  }
}
