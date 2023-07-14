import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [inputType, setInputType] = useState(false);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object({
    first_name: yup.string().required("Majburiy"),
    password: yup.string().min(3, "3ta").max(20, "20ta").required("Majburiy"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",

    defaultValues: {
      first_name: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    axios
      .post("https://nazimburanov.uz/user/login/", {
        username: data.first_name,
        password: data.password,
      })
      .then(res => {
        if (res.status === 200) {
          setToken(res.data);
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-wrap">
      <div className="my-container">
        <Paper className="login" elevation={24}>
          <Typography
            sx={{
              marginBottom: "20px",
              "@media (max-width: 600px)": {
                fontSize: "25px",
              },
            }}
            variant="h4"
            component="h2"
            color="primary"
            textAlign="center"
            gutterBottom>
            Tizimga kirish
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} marginBottom="20px">
              <TextField
                label="Foydalanuvchi nomi"
                helperText={errors.first_name?.message}
                {...register("first_name")}
              />
              <TextField
                type={inputType ? "text" : "password"}
                label="Parol"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      onClick={() => setInputType(!inputType)}
                      position="end"></InputAdornment>
                  ),
                }}
                helperText={errors.password?.message}
                {...register("password")}
              />
            </Stack>
            <Button type="submit" disabled={!isValid} variant="contained">
              Kirish
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};
