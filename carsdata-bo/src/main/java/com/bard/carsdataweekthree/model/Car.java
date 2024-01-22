package com.bard.carsdataweekthree.model;


import lombok.*;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car {

    @Min(0)
    private long id;

    @NotBlank
    @Size(min = 2, max = 27)
    private String mark;
    @NotBlank
    @Size(min = 2, max = 27)
    private String model;
    @NotBlank
    @Size(min = 2, max = 27)
    private String color;

    @Nullable
    private String image;
}
