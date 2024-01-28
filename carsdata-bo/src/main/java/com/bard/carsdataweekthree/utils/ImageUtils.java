package com.bard.carsdataweekthree.utils;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.io.IOUtils;
import org.springframework.util.Base64Utils;

import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;


public class ImageUtils {

    public String ImageConverter(String name) throws IOException {
        InputStream in = getClass().getResourceAsStream("/assets/" + name);
        return new String(Base64Utils.encode(IOUtils.toByteArray(in)));
    }

}
