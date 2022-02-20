package com.app.todo.mission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class MissionService {
    private final MissionRepository repository;

    @Autowired
    public MissionService(MissionRepository repository) {
        this.repository = repository;
    }

    public List<Mission> getMissions() {
        return repository.findAll();
    }

    public void addNewMission(Mission mission) {
        Optional<Mission> optional = repository.findMissionByName(mission.getName());
        if (optional.isPresent()) {
            throw new IllegalStateException("mission added");
        }
        repository.save(mission);
    }

    public void deleteMission(Long missionId) {
        boolean isExist = repository.existsById(missionId);
        if (!isExist) {
            throw new IllegalStateException("mission with id " + missionId + " does not exist");
        }
        repository.deleteById(missionId);
    }

    @Transactional
    public void updateMission(Long missionId, String name, String note, LocalDate lastDay, int priority, boolean isDone) {
        Mission mission = repository.findById(missionId).orElseThrow(() -> new IllegalStateException("Mission with id " + missionId + " does not exist"));
        if (name != null && name.length() > 0 && !Objects.equals(mission.getName(), name)) {
            mission.setName(name);
        }
        if (note != null && note.length() > 0 && !Objects.equals(mission.getNote(), note)) {
            mission.setNote(note);
        }
        if (lastDay != null && !Objects.equals(mission.getLastDay(), lastDay)) {
            mission.setLastDay(lastDay);
        }
        if (priority>=0 && !Objects.equals(mission.getPriority(), priority)) {
            mission.setPriority(priority);
        }
        if (!Objects.equals(mission.isDone(), isDone)) {
            mission.setDone(isDone);
        }
    }
}
