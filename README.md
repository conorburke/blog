## Common kubectl command
```
kubectl get pods
kubectl get services
kubectl get deployments
kubectl apply -f <filename>
kubectl reload restart deployment <deployment name>
kubectl logs <pod name>
kubectl describe <object name>
```

## Skaffold. May need to run several times if errors
```
skaffold dev
```

## Workflow without Skaffold
1. Make change to file
2. Build image
    * ``` docker build -t conorburke/<imagename> .```
3. Push image to dockerhub
    * ```docker push conorburke/<imagename>```
4. Apply appropriate kubectl command (ie kubect reload restart deployment <deployment name>)

