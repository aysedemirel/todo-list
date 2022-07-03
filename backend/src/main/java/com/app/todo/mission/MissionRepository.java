package com.app.todo.mission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {

    @Query("SELECT s FROM Mission s WHERE s.name = ?1")
    Optional<Mission> findMissionByName(String name);
}
