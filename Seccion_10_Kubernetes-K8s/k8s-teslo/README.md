# [Comandos útiles](https://minikube.sigs.k8s.io/docs/start/)
```
minikube pause
```
```
minikube unpause
```

```
minikube stop
```

```
minikube delete --all
```

```
kubectl get pod

kubectl apply -f postgres-config.yml
kubectl apply -f postgres-secrets.yml
kubectl apply -f postgres.yml
```

```
kubectl get all

kubectl logs <nombre del deployment>
kubectl get events
```

```
minikube ip 

minikube ssh -- docker images
```

```
Referencias de instalacion/configuracion minikube

Install minikube en linux WSL2
https://minikube.sigs.k8s.io/docs/start/
https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/
https://zenn.dev/dynamitecoolguy/articles/d4dfa70563ad6f

https://minikube.sigs.k8s.io/docs/drivers/docker/

https://github.com/kubernetes/minikube/pull/15329/commits/aaf539e5c1d324b0e29f35a865169a2f43b2b7de