package com.app.todo.mission;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class MissionConfig {

    @Bean
    CommandLineRunner commandLineRunner(MissionRepository repository) {
        return args -> {
            Mission missionOne = new Mission("Mission One", 2, LocalDate.of(2022, Month.MARCH, 23), LocalDate.of(2022, Month.FEBRUARY, 20), "", true);
            Mission missionTwo = new Mission("Mission Two", 1, LocalDate.of(2022, Month.MARCH, 23), LocalDate.of(2022, Month.FEBRUARY, 20), "", false);
            repository.saveAll(List.of(missionOne, missionTwo));
        };
    }
}
