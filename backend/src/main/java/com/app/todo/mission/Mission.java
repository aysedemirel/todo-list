package com.app.todo.mission;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Mission {
    private String name;
    private int priority;
    private LocalDate lastDay;
    private LocalDate createdDay;
    private String note;
    private boolean isDone;
    @Id
    @SequenceGenerator(
            name = "mission_sequence",
            sequenceName = "mission_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mission_sequence"
    )
    private Long id;

    public Mission(){

    }
    public Mission(Long id,  String name, int priority, LocalDate lastDay, LocalDate createdDay, String note, boolean isDone) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.lastDay = lastDay;
        this.createdDay = createdDay;
        this.note = note;
        this.isDone = isDone;
    }
    public Mission(String name, int priority, LocalDate lastDay, LocalDate createdDay, String note, boolean isDone) {
        this.name = name;
        this.priority = priority;
        this.lastDay = lastDay;
        this.createdDay = createdDay;
        this.note = note;
        this.isDone = isDone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public LocalDate getLastDay() {
        return lastDay;
    }

    public void setLastDay(LocalDate lastDay) {
        this.lastDay = lastDay;
    }

    public LocalDate getCreatedDay() {
        return createdDay;
    }

    public void setCreatedDay(LocalDate createdDay) {
        this.createdDay = createdDay;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}
