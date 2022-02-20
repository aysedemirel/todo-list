package com.app.todo.mission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/mission")
public class MissionController {
    private final MissionService service;

    @Autowired
    MissionController(MissionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Mission> getMissions() {
        return service.getMissions();
    }

    @PostMapping
    public void addNewMission(@RequestBody Mission mission) {
        service.addNewMission(mission);
    }

    @DeleteMapping(path = "{missionId}")
    public void deleteMission(@PathVariable("missionId") Long missionId) {
        service.deleteMission(missionId);
    }

    @PutMapping(path = "{missionId}")
    public void updateMission(@PathVariable("missionId") Long missionId, @RequestBody(required = false) String name,
                              @RequestBody(required = false) String note, @RequestBody(required = false) LocalDate lastDate,
                              @RequestBody(required = false) int priority, @RequestBody(required = false)boolean isDone) {
        service.updateMission(missionId, name, note, lastDate, priority, isDone);
    }
}
