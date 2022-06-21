package com.codegym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "car")
public class Car {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;
    private String type;
    private String name;
    private String phone;
    private String email;
    private String startTime;
    private String endTime;
    @ManyToOne
    @JoinColumn(name = "start_point", referencedColumnName ="id")
    private StartPoint startPoint;
    @ManyToOne
    @JoinColumn(name = "end_point", referencedColumnName ="id")
    private EndPoint endPoint;
}
